const WorkExperience = [
    {
        id: 1,
        title: "Software Engineer",
        company: "NetApp",
        yearsActive: "September 2024 - Present",
        information: [
            "Implemented interrupt coalescing tuning logic in the NIC driver layer (C/C++), reducing CPU interrupt overhead by ~8% under sustained high-throughput workloads on ONTAP storage controllers.",
            "Integrated NVIDIA Spectrum-X Ethernet platform support into ONTAP, leveraging SuperNIC capabilities such as RoCE V2, adaptive routing, and advanced congestion control to achieve better bandwidth utilization for AI/ML cluster workloads.",
            "Developed NIC hotplug support, enabling live network adapter insertion and replacement without cluster downtime, and improving hardware serviceability across storage nodes.",
            "Diagnosed and resolved kernel panics, memory leaks, and race conditions using KGDB, CoreGDB, and crash dump analysis; identified root causes and implemented reference-counting safeguards and synchronization fixes.",
            "Implemented ioctl handlers in the driver layer to expose per-port statistics to user space, enabling real-time visibility into port-level counters for diagnostics and performance monitoring.",
            "Resolved hotplug regression that caused threads to be preempted during critical teardown and reinitialization paths; worked with partner teams to apply priority-based scheduling for driver work queues and restore stable device recovery.",
            "Developed CxxTest-based automated unit tests for NIC driver stability validation, covering stress scenarios including port failover, buffer overflow, and counter validation, through HAL-based mocking, improving code coverage by ~20%."
        ],
    },
    {
        id: 2,
        title: "Software Developer - Volunteering",
        company: "CrowdDoing",
        yearsActive: "January 2024 - August 2024",
        information: [
            "Leveraged expertise in C++ and Python to optimize geo-location and tracking functionalities, enabling accurate monitoring of time spent in nature through GPS data.",
            "Assisted in analyzing data from user interactions to identify trends and improve app functionality.",
            "Worked with cross-functional teams to discuss technical specifications, development progress and testing of the application, ensuring it aligns with public health objectives and user needs."
        ],
    },
    {
        id: 3,
        title: "Embedded Software Developer",
        company: "Nokia",
        yearsActive: "January 2023 - July 2023",
        information: [
            "Contributed to design and development of a sophisticated operating system (SONiC) using C++ and Python for high-speed networking L3 devices within data center environments.",
            "Implemented bulk get kernel level functions to reduce latency and queue time for data retrieval from hardware, thus enhancing overall system responsiveness and reducing execution time by 250 milliseconds.",
            "Revamped the database module to enable real-time updates in the Redis Database when hardware components were added or removed, significantly enhancing application stability and ensuring data accuracy.",
            "Improved system performance by identifying and fixing memory leaks in complex modules.",
            "Collaborated on watchdog timer integration and reliability mechanisms to strengthen fault detection and recovery behavior.",
            "Conducted comprehensive analysis of multiple processors (X86 and ARM) to discern the most optimal choice for forthcoming advancement in router/switching technology.",
            "Acquired knowledge and experience in advanced software architecture of complex Operating System in embedded networking / telecommunication systems."
        ],
    },
    {
        id: 4,
        title: "Senior Software Developer",
        company: "Infosys",
        yearsActive: "May 2018 - July 2021",
        information: [
            "Designed and implemented new algorithm for parallel job execution by collaborating with business analysts and senior developers, resulting in a 27% improvement in overall performance.",
            "Developed and optimized software applications using C++ and Python to manage high-volume production traffic.",
            "Co-authored in analysis and development of critical modules, focused on performance that upgraded application functionality by ensuring minimal memory utilization.",
            "Delivered reliable code by scrutinizing the root cause of bugs, thereby ensuring more robust and stable working of the application.",
            "Resolved performance bottlenecks in high traffic database by optimizing database queries and implementing caching strategies, resulting in 19% improvement in data loading.",
            "Collaborated effectively with testing team and developed a custom data setup tool for application testing across various scenarios."
        ],
    },
    // {
    //     id: 4,
    //     title: "Student Vice President, Generix – Technical symposium",
    //     company: "RMD Engineering College",
    //     yearsActive: "February 2018 - May 2018",
    //     information: [
    //         "Managed event coordinators, event heads and volunteers.",
    //         "Planned the technical events and guest lectures to create a healthy studying environment.",
    //         "Assisted the accountant with filing, copying, data entry and other clerical work."
    //     ],
    // },
    // {
    //     id: 5,
    //     title: "Student Event Coordinator, Generix – Technical symposium",
    //     company: "RMD Engineering College",
    //     yearsActive: "February 2017 - January 2018",
    //     information: [
    //         "Organized one of the technical and paper presentation events.",
    //         "Led a team of 30 to handle around 300 participants.",
    //         "Handled various operations like Inventory, Marketing and Finance."
    //     ],
    // },
    // {
    //     id: 6,
    //     title: "Student Coordinator",
    //     company: "RMD Engineering College",
    //     yearsActive: "February 2017 - January 2017",
    //     information: [
    //         "Administration paperwork regarding library.",
    //         "Assisted students and guests with their queries.",
    //         "Troubleshooting and maintenance computer hardware, printers and software issues.",
    //         "Communication with guest and new students regarding policies."
    //     ],
    // },
];

export default WorkExperience;
