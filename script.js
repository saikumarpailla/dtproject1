function predictSalary(event) {
  event.preventDefault();
  const age = parseFloat(document.getElementById("age").value);
  const experience = parseFloat(document.getElementById("experience").value);
  const qualification = document.getElementById("qualification").value;
  const leetcodeRank = parseInt(document.getElementById("leetcode").value);
  const location = document.getElementById("location").value;
  const cgpa = parseFloat(document.getElementById("cgpa").value);
  const AOI = document.getElementById("interests").value;
  const companySize = document.getElementById("companySize").value;
  const resultElement = document.getElementById("result");
  const jobrole = document.getElementById("jobrole").value;
  const skill = parseInt(document.getElementById("skill").value);
  const certificates = parseInt(document.getElementById("certificates").value);

  let salary = 0;
  if (age >= 60) {
    resultElement.innerHTML = `Not eligible for job`;
  } else {
    // Add base salary based on qualification
    switch (qualification) {
      case "Bachelors":
        salary += 15000;
        break;
      case "Masters":
        salary += 23000;
        break;
      case "PhD":
        salary += 30000;
        break;
    }

    // Add experience bonus
    if (experience > 25) {
      salary += 25 * 2000;
    } else {
      salary += experience * 2000;
    }

    // Add LeetCode bonus
    if (leetcodeRank >= 1 && leetcodeRank < 1000) {
      salary += 2500;
    } else if (leetcodeRank >= 1000 && leetcodeRank < 20000) {
      salary += 1000;
    } else if (leetcodeRank >= 20000) {
      salary += 100;
    }

    // Adjust salary based on geographic location
    switch (location) {
      case "hyderabad":
        salary += 5000;
        break;
      case "delhi":
        salary += 6000;
        break;
      case "mumbai":
        salary += 6000;
        break;
      case "chennai":
        salary += 4000;
        break;
      case "pune":
        salary += 5500;
        break;
    }

    // Adjust salary based on company size
    switch (companySize) {
      case "Small (1-50 employees)":
        salary += 2000;
        break;
      case "Medium (51-500 employees)":
        salary += 5000;
        break;
      case "Large (500+ employees)":
        salary += 7000;
        break;
    }

    // Adjust salary based on number of certificates
    if (certificates <= 0) {
      salary += 0;
    } else if (certificates >= 1 && certificates <= 5) {
      salary += 2500;
    } else if (certificates >= 6 && certificates <= 10) {
      salary += 5000;
    } else {
      salary += 7500;
    }

    // Adjust salary based on area of interest
    switch (AOI) {
      case "iot":
        salary += 3000;
        break;
      case "cloud computing":
        salary += 3500;
        break;
      case "deep learning":
        salary += 3200;
        break;
      case "AI":
        salary += 3100;
        break;
      case "data mining":
        salary += 2800;
        break;
    }

    // Adjust salary based on CGPA
    if (cgpa < 8) {
      salary += 2000;
    } else if (cgpa >= 8 && cgpa <= 9) {
      salary += 3500;
    } else if (cgpa > 9) {
      salary += 5000;
    }

    // Adjust salary based on job role
    switch (jobrole) {
      case "tester":
        salary += 3000;
        break;
      case "softwaredev":
        salary += 2000;
        break;
      case "frontend":
        salary += 1750;
        break;
      case "backend":
        salary += 3500;
        break;
      case "dataanalyst":
        salary += 3800;
        break;
      case "database":
        salary += 2800;
        break;
    }

    // Adjust salary based on skill level
    switch (skill) {
      case 1:
        salary += 1000;
        break;
      case 2:
        salary += 1500;
        break;
      case 3:
        salary += 2250;
        break;
      case 4:
        salary += 3000;
        break;
      case 5:
        salary += 3800;
        break;
    }

    // Display the result
    resultElement.innerHTML = `Predicted Salary: Rs ${salary.toFixed(2)}`;
  }
}
