export const semesterOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

// export const semesterStatusOptions = [
//   { value: "UPCOMING", label: "Upcoming" },
//   { value: "ONGOING", label: "Ongoing" },
//   { value: "ENDED", label: "Ended" },
// ];
export const semesterStatus = ["UPCOMING", "ONGOING", "ENDED"];

export const semesterStatusOptions = semesterStatus.map((semesterStatus) => ({
  value: semesterStatus.toUpperCase(),
  label: semesterStatus,
}));
