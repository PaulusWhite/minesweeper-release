const SavedRecord = (recordId: number, recordType: "Load" | "Save"): string => {
  const btnClass: string = recordType === "Load" ? "saved-record__load-btn" : "saved-record__save-btn";
  const btnName: string = recordType === "Load" ? "Load" : "Save";

  const view = `
    <li class="saved-record" data-saved-record-id="${recordId}">
      <span class="saved-record__name"></span>
      <button class="saved-record__clear-btn">Clear</button>
      <button class="${btnClass}">${btnName}</button>
    </li>
  `;

  return view;
};

export default SavedRecord;
