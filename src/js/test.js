const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");

const data = await fetch("https://plcpwtguguiponmaikkt.supabase.co/rest/v1/kongshaugTable1?type=" + { type }, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsY3B3dGd1Z3VpcG9ubWFpa2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3ODMzNDMsImV4cCI6MjAzMTM1OTM0M30.F0THFO_2BDe8j-ZXrXcyfbczErZtlQ4nCo_MDcCMEVM",
  },
}).then((res) => res.json());
console.log(data);
