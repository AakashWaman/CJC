export class Menu {
    public static menu: Array<any> = [
        {
          re: [
            {path: "new-enquiry", title: "New Enquiry", icon: "pe-7s-graph", class: "" },
            {path: "viewenquiry", title: "View Enquiry", icon: "pe-7s-graph", class: "" }
        ],
        oe: [
            {path: "all-enquiries",title: "All Enquiries" ,icon: "pe-7s-graph", class: ""},
            {path: "customer-list",title: "Customer-List" ,icon: "pe-7s-graph", class: ""}
        ],
        cr:[
            {path: "customer-list",title: "Pending application" ,icon: "pe-7s-graph", class: ""},  
            {path: "company-list",title: "All companies" ,icon: "pe-7s-graph", class: ""}
        ],
        ah:[
            {path: "loanaaplications", title: "Sanctioned List", icon: "pe-7s-graph", class: ""}
        ]
    }
]
}
