import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { browser } from 'k6/experimental/browser';  // ✅ Only works with xk6-browser

export const options = {
    stages: [
        { duration: '30s', target: 10 },  
        { duration: '1m', target: 50 },   
        { duration: '30s', target: 100 }, 
        { duration: '1m', target: 200 },  
        { duration: '30s', target: 0 },   
    ],
    thresholds: {
        http_req_duration: ['p(95)<1000'], 
        http_req_failed: ['rate<0.01'],    
    },
};

const url = "https://mdhasnaeenrizvir17.sg-host.com/"; 

export default function () {
    let response = http.get(url);

    check(response, {
        'Status is 200': (r) => r.status === 200,
        'Response time < 1s': (r) => r.timings.duration < 1000,
    });

    sleep(1); 
}

// ✅ Browser Test Function (Requires xk6-browser)
export function browserTest() {
    const page = browser.newPage(); 

    page.goto(url);
    page.setViewportSize({ width: 1280, height: 720 });  // ✅ Set viewport size

    page.screenshot({
        fullPage: true,
        path: 'screenshots/bottleneck.png' // ✅ Screenshot will be saved here
    });

    page.close(); 
}

// ✅ HTML Summary Report Generation
export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}