const data = `[
    {"numError":"100",
     "nameError":"Continue",
     "imgSrc":"https://http.cat/images/100.jpg"
    },
    {"numError":"101",
    "nameError":"Switching Protocols",
    "imgSrc":"https://http.cat/images/101.jpg"},
    {"numError":"102",
    "nameError":"Processing",
    "imgSrc":"https://http.cat/images/102.jpg"},
    {"numError":"103",
    "nameError":"Early Hints",
    "imgSrc":"https://http.cat/images/103.jpg"},
    {"numError":"200",
    "nameError":"OK",
    "imgSrc":"https://http.cat/images/200.jpg"},
    {"numError":"201",
    "nameError":"Created",
    "imgSrc":"https://http.cat/images/201.jpg"},
    {"numError":"202",
    "nameError":"Accepted",
    "imgSrc":"https://http.cat/images/202.jpg"},
    {"numError":"203",
    "nameError":"Non-Authoritative Information",
    "imgSrc":"https://http.cat/images/203.jpg"},
    {"numError":"204",
    "nameError":"No Content",
    "imgSrc":"https://http.cat/images/204.jpg"},
    {"numError":"205",
    "nameError":"Reset Content",
    "imgSrc":"https://http.cat/images/205.jpg"},
    {"numError":"206",
    "nameError":"Partial Content",
    "imgSrc":"https://http.cat/images/206.jpg"},
    {"numError":"207",
    "nameError":"Multi-Status",
    "imgSrc":"https://http.cat/images/207.jpg"},
    {"numError":"208",
    "nameError":"Already Reported",
    "imgSrc":"https://http.cat/images/208.jpg"},
    {"numError":"214",
    "nameError":"Transformation Applied",
    "imgSrc":"https://http.cat/images/214.jpg"},
    {"numError":"226",
    "nameError":"IM Used",
    "imgSrc":"https://http.cat/images/226.jpg"},
    {"numError":"300",
    "nameError":"Multiple Choices",
    "imgSrc":"https://http.cat/images/300.jpg"},
    {"numError":"301",
    "nameError":"Moved Permanently",
    "imgSrc":"https://http.cat/images/301.jpg"},
    {"numError":"302",
    "nameError":"Found",
    "imgSrc":"https://http.cat/images/302.jpg"},
    {"numError":"303",
    "nameError":"See Other",
    "imgSrc":"https://http.cat/images/303.jpg"},
    {"numError":"304",
    "nameError":"Not Modified",
    "imgSrc":"https://http.cat/images/304.jpg"},
    {"numError":"305",
    "nameError":"Use Proxy",
    "imgSrc":"https://http.cat/images/305.jpg"},
    {"numError":"307",
    "nameError":"Temporary Redirect",
    "imgSrc":"https://http.cat/images/307.jpg"},
    {"numError":"308",
    "nameError":"Permanent Redirect",
    "imgSrc":"https://http.cat/images/308.jpg"},
    {"numError":"400",
    "nameError":"Bad Request",
    "imgSrc":"https://http.cat/images/400.jpg"},
    {"numError":"401",
    "nameError":"Unauthorized",
    "imgSrc":"https://http.cat/images/401.jpg"},
    {"numError":"402",
    "nameError":"Payment Required",
    "imgSrc":"https://http.cat/images/402.jpg"},
    {"numError":"403",
    "nameError":"Forbidden",
    "imgSrc":"https://http.cat/images/403.jpg"},
    {"numError":"404",
    "nameError":"Not Found",
    "imgSrc":"https://http.cat/images/404.jpg"},
    {"numError":"405",
    "nameError":"Method Not Allowed",
    "imgSrc":"https://http.cat/images/405.jpg"},
    {"numError":"406",
    "nameError":"Not Acceptable",
    "imgSrc":"https://http.cat/images/406.jpg"},
    {"numError":"407",
    "nameError":"Proxy Authentication",
    "imgSrc":"https://http.cat/images/407.jpg"},
    {"numError":"408",
    "nameError":"Request Timeout",
    "imgSrc":"https://http.cat/images/408.jpg"},
    {"numError":"409",
    "nameError":"Conflict",
    "imgSrc":"https://http.cat/images/409.jpg"},
    {"numError":"410",
    "nameError":"Gone",
    "imgSrc":"https://http.cat/images/410.jpg"},
    {"numError":"411",
    "nameError":"Length Required",
    "imgSrc":"https://http.cat/images/411.jpg"},
    {"numError":"412",
    "nameError":"Precondition Failed",
    "imgSrc":"https://http.cat/images/412.jpg"},
    {"numError":"413",
    "nameError":"Payload Too Large",
    "imgSrc":"https://http.cat/images/413.jpg"},
    {"numError":"414",
    "nameError":"Request-URI Too Long",
    "imgSrc":"https://http.cat/images/414.jpg"},
    {"numError":"415",
    "nameError":"Unsupported Media Type",
    "imgSrc":"https://http.cat/images/415.jpg"},
    {"numError":"416",
    "nameError":"Request Range Not Satisfiable",
    "imgSrc":"https://http.cat/images/416.jpg"},
    {"numError":"417",
    "nameError":"Expectation Failed",
    "imgSrc":"https://http.cat/images/417.jpg"},
    {"numError":"418",
    "nameError":"I'm a teapot",
    "imgSrc":"https://http.cat/images/418.jpg"},
    {"numError":"420",
    "nameError":"Enhance Your Calm",
    "imgSrc":"https://http.cat/images/420.jpg"},
    {"numError":"421",
    "nameError":"Misdirected Request",
    "imgSrc":"https://http.cat/images/421.jpg"},
    {"numError":"422",
    "nameError":"Unprocessable Entity",
    "imgSrc":"https://http.cat/images/422.jpg"},
    {"numError":"423",
    "nameError":"Locked",
    "imgSrc":"https://http.cat/images/423.jpg"},
    {"numError":"424",
    "nameError":"Failed Dependency",
    "imgSrc":"https://http.cat/images/424.jpg"},
    {"numError":"425",
    "nameError":"Too Early",
    "imgSrc":"https://http.cat/images/425.jpg"},
    {"numError":"426",
    "nameError":"Updrade Required",
    "imgSrc":"https://http.cat/images/426.jpg"},
    {"numError":"428",
    "nameError":"Precondition Required",
    "imgSrc":"https://http.cat/images/428.jpg"},
    {"numError":"429",
    "nameError":"Too Many Request",
    "imgSrc":"https://http.cat/images/429.jpg"},
    {"numError":"431",
    "nameError":"Request Header Fields Too Large",
    "imgSrc":"https://http.cat/images/431.jpg"},
    {"numError":"444",
    "nameError":"No Response",
    "imgSrc":"https://http.cat/images/444.jpg"},
    {"numError":"450",
    "nameError":"Blocked by Windows Parental Controls",
    "imgSrc":"https://http.cat/images/450.jpg"},
    {"numError":"451",
    "nameError":"Unavailable For Legal Reasons",
    "imgSrc":"https://http.cat/images/451.jpg"},
    {"numError":"497",
    "nameError":"HTTP Reauest Sent to HTTPS Port",
    "imgSrc":"https://http.cat/images/497.jpg"},
    {"numError":"498",
    "nameError":"Token expired/invalid",
    "imgSrc":"https://http.cat/images/498.jpg"},
    {"numError":"499",
    "nameError":"Client Closed Request",
    "imgSrc":"https://http.cat/images/499.jpg"},
    {"numError":"500",
    "nameError":"Internal Server Error",
    "imgSrc":"https://http.cat/images/500.jpg"},
    {"numError":"501",
    "nameError":"Not Implemented",
    "imgSrc":"https://http.cat/images/501.jpg"},
    {"numError":"502",
    "nameError":"Bad Gateway",
    "imgSrc":"https://http.cat/images/502.jpg"},
    {"numError":"503",
    "nameError":"Service Unavailable",
    "imgSrc":"https://http.cat/images/503.jpg"},
    {"numError":"504",
    "nameError":"Gateway Timeout",
    "imgSrc":"https://http.cat/images/504.jpg"},
    {"numError":"506",
    "nameError":"Variant Also Negotiates",
    "imgSrc":"https://http.cat/images/506.jpg"},
    {"numError":"507",
    "nameError":"Insufficient Storage",
    "imgSrc":"https://http.cat/images/507.jpg"},
    {"numError":"508",
    "nameError":"Loop Detected",
    "imgSrc":"https://http.cat/images/508.jpg"},
    {"numError":"509",
    "nameError":"Bandwidth Limit Exceeded",
    "imgSrc":"https://http.cat/images/509.jpg"},
    {"numError":"510",
    "nameError":"Not Extented",
    "imgSrc":"https://http.cat/images/510.jpg"},
    {"numError":"511",
    "nameError":"Network Authentivation Required",
    "imgSrc":"https://http.cat/images/511.jpg"},
    {"numError":"521",
    "nameError":"Web Server Is Down",
    "imgSrc":"https://http.cat/images/521.jpg"},
    {"numError":"522",
    "nameError":"Connection Timed Out",
    "imgSrc":"https://http.cat/images/522.jpg"},
    {"numError":"523",
    "nameError":"Origin Is Unreachable",
    "imgSrc":"https://http.cat/images/523.jpg"},
    {"numError":"525",
    "nameError":"SSL Handshake Failed",
    "imgSrc":"https://http.cat/images/525.jpg"},
    {"numError":"530",
    "nameError":"Site Frozen",
    "imgSrc":"https://http.cat/images/530.jpg"},
    {"numError":"599",
    "nameError":"Network Connect Timout Error",
    "imgSrc":"https://http.cat/images/599.jpg"}
]`

