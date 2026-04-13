const WorkExperience = [
    {
        id: 1,
        title: "GPU Simulation for Memory Analysis",
        company: "Northeastern University",
        yearsActive: "January 2024 - Present",
        information: [
            "Analyzed cache memory using GPGPU simulator with diverse multithreaded workloads across various cache and system configurations. Concentrated on performance improvement and accuracy of processing by working with kernels and schedulers.",
            "Led a complex GPU cache simulation project to evaluate the efficiency of different set indexing methods on GPU caches.",
            "Simulated 16 different cache configurations using GPGPU-Sim to analyze the impact of various set indexing functions on cache performance, across four GPU cache models.",
            "Explored and implemented four set indexing functions: Linear, Simple XOR, Fermi Hash, and Pseudo-Random Interleaved, testing each against 12 different benchmarks to measure cache miss rates.",
            "Enhanced understanding of GPU cache behavior by manipulating variables like cache size, associativity, and replacement policy, thus identifying optimal configurations for different workload scenarios.",
            "Documented detailed simulation results which demonstrated the minimal impact of set index function changes on typical workloads but highlighted potential optimizations for custom scenarios."
        ],
    },
    {
        id: 2,
        title: "3-D Mapping",
        company: "Northeastern University",
        yearsActive: "January 2023 - July 2023",
        information: [
            "Developed python driver, integrated LiDAR, IMU and GPS using ROS for mapping the real world using an autonomous car. Calibrated IMU and LiDAR point cloud data for better loop closures. Analyzed and visualized the trajectory and point cloud data for mapping.",
            "Implemented LeGO-LOAM for advanced LIDAR-based urban mapping, enhancing accuracy in complex city environments.",
            "Applied LeGO-LOAM, a state-of-the-art LIDAR odometry and mapping algorithm, to accurately map areas with challenging loop closures such as parking garages.",
            "Conducted field tests using high-resolution LIDAR sensors, collecting extensive datasets to optimize system performance in real-world conditions.",
            "Developed and fine-tuned segmentation and feature extraction processes to handle large quantities of data from urban environments, significantly improving the system's efficiency and reliability.",
            "Solved critical integration issues within the Ubuntu operating system, ensuring compatibility and performance stability for the mapping software.",
            "Validated system accuracy against established datasets and successfully demonstrated its capability to operate without IMU data, showcasing robustness in sensor-independent scenarios."
        ],
    },
    {
        id: 3,
        title: "Currency Recognition System",
        company: "Northeastern University",
        yearsActive: "May 2018 - July 2021",
        information: [
            "Used various image processing techniques to extract features and detect the edges of an image to identify the currency. This project was focused on extracting the gradients, orientation, and zero-crossing of pixels in different color spaces. A GUI was developed to display the detection process and result.",
            "Performed various image processing techniques to extract features, gradients, orientations, zero-crossing of pixel in different color spaces and edges of an image. GUI was introduced to display the detection process and result.",
            "Developed an Automated Currency Recognition System using advanced image processing techniques to accurately identify and classify global currencies by denomination and origin.",
            "Pioneered the application of Canny edge detection and color space transformations to enhance the accuracy of currency identification in complex image backgrounds.",
            "Conducted extensive research and experimentation with various edge detection methods, ultimately integrating the Canny algorithm for its superior noise suppression and edge delineation capabilities.",
            "Utilized statistical moments and gray level co-occurrence matrix (GLCM) for detailed texture analysis and feature extraction from currency images.",
            "Designed an interactive graphical user interface (GUI) in MATLAB, enabling users to upload and identify currency images effortlessly.",
            "Analyzed performance metrics to refine algorithms, achieving high accuracy rates in currency recognition across diverse international datasets."
        ],
    },
    {
        id: 4,
        title: "Point Cloud Mapping for COBRA: Search and Rescue",
        company: "Northeastern University",
        yearsActive: "February 2018 - May 2018",
        information: [
            "Developed advanced point cloud mapping solutions for COBRA, a robotic system designed for search and rescue operations.",
            "Integrated Intel RealSense D455 cameras to facilitate real-time 3D environmental mapping, enhancing robot's ability to navigate and perform in complex terrains.",
            "Implemented and tested point cloud algorithms using both Gazebo simulation and real-time data processing, significantly improving the robot's operational efficiency and safety in hazardous conditions.",
            "Designed and iterated a custom camera mount for optimal performance and durability, incorporating 3D printed components and ensuring compatibility with the robot’s movements.",
            "Contributed to future developments by planning enhancements for motion planning algorithms to optimize search paths and ensure efficient real-time data processing in unpredictable environments.",
        ],
    },
    {
        id: 5,
        title: "Car Safety Enhancement System",
        company: "RMD Engineering College",
        yearsActive: "February 2017 - January 2018",
        information: [
            "Engineered Level 1 autonomous car model using Arduino. Implemented real time sensor data processing to enable the prototype to autonomously halt or alter its course in response to its surroundings. GPS and GSM modules are integrated to transmit an emergency text message in case of emergency."
        ],
    },
    {
        id: 6,
        title: "Smart Assistance System",
        company: "RMD Engineering College",
        yearsActive: "February 2017 - January 2017",
        information: [
            "The prototype is build using Arduino which identifies the user/driver by the unique car key provided to them and adjusts the seat position, OVRM, IVRM, and temperature to the predefined user's preference.",
            "Engineered a microcontroller-based Car Safety Enhancement System (CSES) to increase vehicular safety by preventing accidents through automated sensing and response mechanisms. Key contributions included:",
            "Implemented a suite of sensors (IR, UV, vibration) to monitor surrounding vehicles and obstacles, facilitating real-time automated adjustments such as lane changes and speed modulation.",
            "Developed system logic using Embedded C on a PIC16F877A microcontroller, prioritizing data from sensors to initiate appropriate vehicular responses.",
            "Created a robust hardware interface that included components like ultrasonic sensors, GSM/GPS modules for location tracking, and LCD displays for driver notifications.",
            "Enhanced safety protocols by integrating automated emergency messaging using GSM and GPS, ensuring rapid response in accident scenarios.",
            "Led the project through the full development cycle, from conceptual design and circuitry to software implementation and field testing."
        ],
    },
];

export default WorkExperience;
