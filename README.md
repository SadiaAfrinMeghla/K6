# K6: A Modern Load Testing Tool for Developers

## Introduction

K6 is an open-source tool that helps developers test how well their websites, applications, or APIs perform under heavy usage. It is lightweight, easy to use, and provides detailed reports on performance, making it a great choice for developers and testers.

## What is K6?

K6 is a tool that allows you to simulate multiple users interacting with your application at the same time. It helps you understand how your system behaves when many people are using it.

### Key Features of K6:

- **Easy Scripting with JavaScript** – Write test scripts in JavaScript, which is simple and widely used.
- **Fast and Efficient** – Built using Go, making it lightweight and capable of handling thousands of virtual users without slowing down your system.
- **Detailed Reports** – Provides clear insights into your application’s performance using built-in metrics.
- **Integration with CI/CD Pipelines** – Easily fits into automated testing workflows.
- **Works Locally and in the Cloud** – You can run tests on your own system or use K6 Cloud for large-scale testing.

## K6 vs JMeter: A Simple Comparison

JMeter is another popular performance testing tool, but it works differently from K6. Here’s a simple comparison:

| Feature                 | K6                                                              | JMeter                               |
| ----------------------- | --------------------------------------------------------------- | ------------------------------------ |
| **Scripting**           | Uses JavaScript (easy to learn)                                 | Uses XML (more complex)              |
| **Performance**         | Fast and lightweight                                            | Can use more system resources        |
| **User Interface**      | Command-line based                                              | Has a graphical interface            |
| **Best For**            | Developers who like coding                                      | Testers who prefer a visual approach |
| **Integration**         | Works well with modern DevOps tools like Grafana and Prometheus | Has plugins for various tools        |
| **Distributed Testing** | Can be run on multiple machines easily                          | Needs extra setup                    |

## Why Choose K6?

K6 is a great option if you:

- Want a **simple, code-based** approach to load testing.
- Need **fast and efficient** performance testing.
- Want a tool that **fits into automated testing (CI/CD)** workflows.
- Prefer **detailed performance reports** that help make decisions.

If you are a beginner, don’t worry! K6 is simple to learn, and once you understand the basics, you can quickly start testing your applications.

---

## Installation Guide

To start using K6, follow these installation steps based on your operating system.

### Install K6 on Windows

1. Download the latest K6 release from the [official K6 website](https://k6.io/docs/getting-started/installation/).
2. Extract the downloaded file and add the K6 binary to your system’s environment variables.
3. Open **Command Prompt** and run:
   ```sh
   k6 version
   ```
   If K6 is installed correctly, this will display the installed version.

### Install K6 on macOS

1. Open **Terminal** and install K6 using Homebrew:
   ```sh
   brew install k6
   ```
2. Verify the installation:
   ```sh
   k6 version
   ```

### Install K6 on Linux

For Debian/Ubuntu-based distributions:

1. Run the following command to install K6:
   ```sh
   sudo apt update && sudo apt install k6
   ```
2. Verify the installation:
   ```sh
   k6 version
   ```

For Red Hat-based distributions:

1. Install K6 using:
   ```sh
   sudo dnf install k6
   ```
2. Verify the installation:
   ```sh
   k6 version
   ```

### Install K6 using Docker

If you prefer running K6 via Docker, use the following command:

```sh
 docker run --rm -i grafana/k6 version
```

---


## **Project Structure**  

```
📂 k6-performance-testing  
│── 📂 screenshots                  # Stores captured screenshots from browser tests  
│── 📂 reports                      # Stores generated HTML performance reports  
│── 📜 README.md                    # Documentation for this repository  
│── 📜 basic-step1.js                # Simple K6 script for basic testing  
│── 📜 bottleneck-test.js            # Identifies bottlenecks in response time  
│── 📜 browser-iteration.js          # K6 browser automation test with iterations  
│── 📜 browser-test.js               # K6 browser-based test for form submissions  
│── 📜 browser-viewport.js           # Tests with different viewport sizes  
│── 📜 get-api-test.js               # API GET request validation  
│── 📜 get-api.js                    # API GET request with assertions  
│── 📜 network-throttle.js           # Simulates different network conditions  
│── 📜 post-api.js                   # API POST request test  
│── 📜 post-randomvalue.js           # API POST request with random values  
│── 📜 register-form-randomvalue.js  # Form submission test with random values  
│── 📜 register-form-validation.js   # Form validation test (error handling)  
│── 📜 report-generator.js           # Converts JSON results to readable HTML reports  
│── 📜 scenario.js                   # Multiple scenario execution in K6  
│── 📜 stress-test.js                # Stress testing scenario  
│── 📜 template.js                   # Template script for K6  
│── 📜 template1.js                  # Another template script for future tests  
│── 📜 test.js                       # General test script  
│── 📜 thresholds.js                 # Defines performance thresholds for test validation  
│── 📜 verify-status-code.js         # API response status code validation  

```

---

## **Test Execution**  

| **Test Type**        | **Test Description**                     | **Execution Command** |
|----------------------|----------------------------------------|----------------------|
| **API Tests**        | GET API Test                           | `k6 run get-api-test.js` |
|                      | GET API Test (Alternative)             | `k6 run get-api.js` |
|                      | POST API Test                          | `k6 run post-api.js` |
|                      | POST API Test (Random Data)            | `k6 run post-randomvalue.js` |
| **Browser Tests**    | Basic Browser Test                     | `k6 run browser-test.js` |
|                      | Browser Iteration Test                 | `k6 run browser-iteration.js` |
|                      | Browser Viewport Test                  | `k6 run browser-viewport.js` |
|                      | Register Form (Random Data)            | `k6 run register-form-randomvalue.js` |
|                      | Register Form Validation               | `k6 run register-form-validation.js` |
| **Scenario-Based Tests** | Run Scenario Execution            | `k6 run scenario.js` |
| **Performance Tests** | Verify Status Code Test               | `k6 run verify-status-code.js` |
| **Stress Tests**     | Run Stress Testing                     | `k6 run stress-test.js` |
| **Template Tests**   | Template Test 1                        | `k6 run templete.js` |
|                      | Template Test 2                        | `k6 run templete1.js` |
| **Miscellaneous**    | Test Script Execution                  | `k6 run test.js` |

---
## **Screenshots**  
All screenshots from the **browser tests** are stored in the `screenshots/` folder.  


## **Contributing**  
If you want to contribute:  
1. Fork the repository  
2. Create a new branch  
3. Make your changes and push  
4. Submit a pull request  

---

## **Conclusion**  

This repository provides a structured approach to **performance, API, browser, and stress testing** using **K6**. With well-organized scripts and easy execution commands, it ensures **efficiency and reliability** in testing. 🚀 **Happy Testing!**