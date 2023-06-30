export const validateFirstName = (firstName) => {
  if (firstName.trim() === "") {
    return "First name is required.";
  }
  return "";
};
export const validateUserName = (userName) => {
  if (userName.trim() === "") {
    return "User name is required. Enter your email-id";
  }
  return "";
};

export const validateLastName = (lastName) => {
  if (lastName.trim() === "") {
    return "Last name is required.";
  }
  return "";
};

export const validateEmail = (email) => {
  if (email.trim() === "") {
    return "Email is required.";
  }

  // Email validation using regular expression
  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(email)) {
    return "Invalid email format.";
  }

  return "";
};

export const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber === "") {
    return "Phone Number is required.";
  } else if (phoneNumber.length !== 10) {
    return "Phone Number must be exactly 10 digits.";
  }
  return "";
};

export const validateOTP = (otp) => {
  if (otp === "") {
    return "OTP is required.";
  } else if (otp.length !== 6) {
    return "OTP must be exactly 6 digits.";
  } else if (!/^\d+$/.test(otp)) {
    return "OTP must contain only digits.";
  }
  return "";
};

export const validatePassword = (password) => {
  if (password.trim() === "") {
    return "Password is required.";
  } else if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return "";
};
export const validateConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword.trim() === "") {
    return "Confirm password is required.";
  } else if (password !== confirmPassword) {
    return "Passwords do not match.";
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
    return "Invalid Aadhar number";
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
