export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const monthOptions = monthNames.map((month) => ({
  value: month,
  label: month,
}));

export const genders = ["Male", "Female", "Other"];
export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const genderOptions = genders.map((gender) => ({
  value: gender.toLowerCase(),
  label: gender,
}));

export const bloodGroupOptions = bloodGroups.map((bloodGroup) => ({
  value: bloodGroup,
  label: bloodGroup,
}));
