import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import {
  validateConsistency,
  validateFullName,
  validateVillage,
  validateMandal,
  validateDistrict,
  validateOccupation,
  validateContribution,
  validateAadharNumber,
  validateFatherName,
  validateEmail,
  validatePhoneNumber,
  validateUserType,
} from './Validations';
import { Dropdown } from 'react-native-element-dropdown';
const RegistrationForm = () => {
  const [consistency, setConsistency] = useState("");
  const [fullName, setfulName] = useState("");
  const [village, setVillage] = useState("");
  const [mandal, setMandal] = useState("");
  const [district, setDistrict] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [fatherName, setfatherName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contribution, setContribution] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [remarks, setRemarks] = useState("");
  const [selectedValue, setSelectedValue] = useState();
  const [selectedValueError, setSelectedValueError] = useState();
  const [consistencyError, setConsistencyError] = useState("");
  const [fullNameError, setfulNameError] = useState("");
  const [villageError, setVillageError] = useState("");
  const [mandalError, setMandalError] = useState("");
  const [districtError, setDistrictError] = useState("");
  const [aadharNumberError, setAadharNumberError] = useState("");
  const [fatherNameError, setfatherNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [occupationError, setOccupationError] = useState("");
  const [contributionError, setContributionError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleSubmit = () => {
    // Perform form validation
    const consistencyError = validateConsistency(consistency);
    const fullNameError = validateFullName(fullName);
    const emailError = validateEmail(email);
    const phoneNumberError = validatePhoneNumber(phoneNumber);
    const villageError = validateVillage(village);
    const mandalError = validateMandal(mandal);
    const districtError = validateDistrict(district);
    const aadharNumberError = validateAadharNumber(aadharNumber);
    const fatherNameError = validateFatherName(fatherName);
    const occupationError = validateOccupation(occupation);
    const contributionError = validateContribution(contribution);
    const userTypeError = validateUserType(selectedValue);

    setConsistencyError(consistencyError);
    setfulNameError(fullNameError);
    setEmailError(emailError);
    setPhoneNumberError(phoneNumberError);
    setVillageError(villageError);
    setMandalError(mandalError);
    setDistrictError(districtError);
    setAadharNumberError(aadharNumberError);
    setfatherNameError(fatherNameError);
    setOccupationError(occupationError);
    setContributionError(contributionError);
    setSelectedValueError(userTypeError);

    if (
      !consistencyError &&
      !fullNameError &&
      !emailError &&
      !phoneNumberError &&
      !villageError &&
      mandalError &&
      districtError &&
      aadharNumberError &&
      fatherNameError &&
      occupationError &&
      contributionError &&
      userTypeError
    ) {
      // Perform registration logic here
      // Reset form fields
      setConsistency("");
      setfulName("");
      setEmail("");
      setPhoneNumber("");
      setVillage("");
      setMandal("");
      setDistrict("");
      setAadharNumber("");
      setfatherName("");
      setOccupation("");
      setContribution("");
      setSelectedValue("");
    }
  };

  const handleReset = () => {
    setConsistency("");
    setfulName("");
    setVillage("");
    setMandal("");
    setDistrict("");
    setAadharNumber("");
    setfatherName("");
    setEmail("");
    setOccupation("");
    setContribution("");
    setPhoneNumber("");
    setRemarks("");
    setSelectedValue("");
    setConsistencyError("");
    setfulNameError("");
    setEmailError("");
    setPhoneNumberError("");
    setVillageError("");
    setMandalError("");
    setDistrictError("");
    setAadharNumberError("");
    setfatherNameError("");
    setOccupationError("");
    setContributionError("");
    setSelectedValueError("");
  };
  const userTypes = [
    { label: 'NRI', value: 'NRI' },
    { label: 'NRV', value: 'NRV' },
  ];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Register</Text>
   <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={userTypes}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="select user type"
        searchPlaceholder="Search..."
        value={selectedValue}
        required
        onChange={item => {
          setSelectedValue(item.value);
        }}
      />
     {selectedValueError ? (
        <Text style={styles.error}>{selectedValueError}</Text>
      ) : null}
      <Text style={styles.label}>Constituency</Text>
      <TextInput
        style={styles.input}
        value={consistency}
        onChangeText={setConsistency}
        placeholder="enter constituency"
        placeholderTextColor="black"
        keyboardType="default"
      />
      {consistencyError ? (
        <Text style={styles.error}>{consistencyError}</Text>
      ) : null}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setfulName}
        placeholder="enter full name"
        placeholderTextColor="black"
        keyboardType="default"
      />
      {fullNameError ? <Text style={styles.error}>{fullNameError}</Text> : null}
      <Text style={styles.label}>Village</Text>
      <TextInput
        style={styles.input}
        value={village}
        onChangeText={setVillage}
        placeholder="enter village name"
        placeholderTextColor="black"
        keyboardType="default"
      />
      {villageError ? <Text style={styles.error}>{villageError}</Text> : null}
      <Text style={styles.label}>Mandal</Text>
      <TextInput
        style={styles.input}
        value={mandal}
        onChangeText={setMandal}
        placeholder="enter mandal name"
        placeholderTextColor="black"
        keyboardType="default"
      />
      {mandalError ? <Text style={styles.error}>{mandalError}</Text> : null}
      <Text style={styles.label}>District</Text>
      <TextInput
        style={styles.input}
        value={district}
        onChangeText={setDistrict}
        placeholder="enter district name"
        placeholderTextColor="black"
        keyboardType="default"
      />
      {districtError ? <Text style={styles.error}>{districtError}</Text> : null}
      <Text style={styles.label}>Occupation</Text>
      <TextInput
        style={styles.input}
        value={occupation}
        onChangeText={setOccupation}
        placeholder="enter your occupation "
        placeholderTextColor="black"
        keyboardType="default"
      />
      {occupationError ? (
        <Text style={styles.error}>{occupationError}</Text>
      ) : null}
      <Text style={styles.label}>Mode of Contribution</Text>
      <TextInput
        style={styles.input}
        value={contribution}
        onChangeText={setContribution}
        placeholder="contribution Type"
        placeholderTextColor="black"
        keyboardType="default"
      />
      {contributionError ? (
        <Text style={styles.error}>{contributionError}</Text>
      ) : null}
      <Text style={styles.label}>Aadhar Number</Text>
      <TextInput
        style={styles.input}
        value={aadharNumber}
        onChangeText={setAadharNumber}
        placeholder="enter aadhar number"
        placeholderTextColor="black"
        keyboardType="phone-pad"
        maxLength={12}
      />
      {aadharNumberError ? (
        <Text style={styles.error}>{aadharNumberError}</Text>
      ) : null}
      <Text style={styles.label}>Father Name</Text>
      <TextInput
        style={styles.input}
        value={fatherName}
        onChangeText={setfatherName}
        placeholder="enter father name"
        placeholderTextColor="black"
        keyboardType="default"
      />
      {fatherNameError ? (
        <Text style={styles.error}>{fatherNameError}</Text>
      ) : null}
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) =>
          setPhoneNumber(text.replace(/[^0-9]/g, "").slice(0, 10))
        }
        placeholder="enter phone number"
        placeholderTextColor="black"
        keyboardType="phone-pad"
        maxLength={10}
      />
      {phoneNumberError ? (
        <Text style={styles.error}>{phoneNumberError}</Text>
      ) : null}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="enter email"
        placeholderTextColor="black"
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Text style={styles.label}>Remarks</Text>
      <TextInput
        style={styles.input}
        value={remarks}
        onChangeText={setRemarks}
        placeholder="enter any remarks"
        placeholderTextColor="black"
        keyboardType="default"
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="green" />
        <View style={styles.buttonSpacer} />
        <Button title="Reset" onPress={handleReset} color="red" />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account. </Text>
        <Text style={[styles.loginText, styles.highlightedText]}>Log in</Text>
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    marginTop: 15,
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
     placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
     inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonSpacer: {
    width: 10,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 16,
  },
  highlightedText: {
    fontWeight: "bold",
    textDecorationLine: "none",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default RegistrationForm;
