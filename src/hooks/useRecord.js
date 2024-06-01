import { useState, useEffect } from "react";
//getting initial info from local storage
function getInitialRecord() {
  const record = localStorage.getItem("memory-cards-app");
  return record ? JSON.parse(record) : [];
}
//Hook for keeping historical records for game
export default function useRecord() {
  const [record, setRecord] = useState(getInitialRecord());

  useEffect(() => {
    localStorage.setItem("memory-cards-app", JSON.stringify(record));
  }, [record]);

  function saveRecord(width, height, nMoves, time) {
    const filteredArray = record.filter(r => r.width === width && r.height === height);
    if (!filteredArray.length) {
      //if there is no records for that size
      setRecord([...record, { width, height, nMoves, time }]);
    } else {
      const [prevRecord] = filteredArray;
      const newRecord = { ...prevRecord };
      const { nMoves: prevNMoves, time: prevTime } = prevRecord;

      if (nMoves < prevNMoves) {
        newRecord.nMoves = nMoves;
        newRecord.time = time;
      }
      if (nMoves === prevNMoves) {
        newRecord.time = prevTime < time ? prevTime : time;
      }
      setRecord([...record.filter(r => r.width !== width || r.height !== height), newRecord]);
    }
  }
  //find record for game size
  function getRecord(width, height) {
    return record.find(r => r.width === width && r.height === height) || { width, height, nMoves: 0 };
  }

  return [record, saveRecord, getRecord];
}
