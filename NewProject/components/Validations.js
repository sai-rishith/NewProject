export const validateFirstName = (firstName) => {
  if (firstName.trim() === "") {
    return "first name is required.";
  }
  return "";
};
export const validateUserName = (userName) => {
  if (userName.trim() === "") {
    return "user name is required. Enter your email-id";
  }
  return "";
};

export const validateLastName = (lastName) => {
  if (lastName.trim() === "") {
    return "last name is required.";
  }
  return "";
};

export const validateEmail = (email) => {
  if (email.trim() === "") {
    return "email is required.";
  }

  // Email validation using regular expression
  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(email)) {
    return "invalid email format.";
  }

  return "";
};

export const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber === "") {
    return "phone number is required.";
  } else if (phoneNumber.length !== 10) {
    return "phone number must be exactly 10 digits.";
  }
  return "";
};

export const validateOTP = (otp) => {
  if (otp === "") {
    return "otp is required.";
  } else if (otp.length !== 6) {
    return "otp must be exactly 6 digits.";
  } else if (!/^\d+$/.test(otp)) {
    return "otp must contain only digits.";
  }
  return "";
};

export const validatePassword = (password) => {
  if (password.trim() === "") {
    return "password is required.";
  } else if (password.length < 6) {
    return "password must be at least 6 characters long.";
  }
  return "";
};
export const validateConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword.trim() === "") {
    return "confirm password is required.";
  } else if (password !== confirmPassword) {
    return "passwords do not match.";
  }
  return "";
};

export const validateConsistency = (consistency) => {
  if (consistency.trim() === "") {
    return "consistency is required.";
  }
  return "";
};
export const validateFullName = (fullName) => {
  if (fullName.trim() === "") {
    return "full name is required.";
  }
  return "";
};
export const validateVillage = (village) => {
  if (village.trim() === "") {
    return "village name is required.";
  }
  return "";
};

export const validateMandal = (mandal) => {
  if (mandal.trim() === "") {
    return "mandal name is required.";
  }
  return "";
};

export const validateDistrict = (district) => {
  if (district.trim() === "") {
    return "district name is required.";
  }
  return "";
};

export const validateOccupation = (occupation) => {
  if (occupation.trim() === "") {
    return "occupation is required.";
  }
  return "";
};

export const validateContribution = (contribution) => {
  if (contribution.trim() === "") {
    return "mode of contribution is required.";
  }
  return "";
};

export const validateAadharNumber = (aadharNumber) => {
  const aadharRegex = /^\d{12}$/;
  const isValid = aadharRegex.test(aadharNumber);

  if (!isValid) {
    return "invalid aadhar number";
  }

  return null;
};

export const validateFatherName = (fatherName) => {
  if (fatherName.trim() === "") {
    return "father name is required.";
  }
  return "";
};
export const validateUserType = (UserType) => {
  if (UserType === "") {
    return "user type is required.";
  }
  return "";
};
