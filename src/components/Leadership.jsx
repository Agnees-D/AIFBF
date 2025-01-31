import React from "react";

const Leadership = () => {
  const leaders = [
    {
      name: "Shri Dayananda Reddy",
      role: "Managing Director",
      image: "/videos/img11.jpg",
    },
    {
      name: "Smt Pramila M. Nesargi",
      role: "Director",
      image: "/videos/img222.jpeg",
    },
    {
      name: "Smt Prathibha Dayananda",
      role: "Director",
      image: "/videos/img33.jpeg",
    },
    {
      name: "Shri Shiv Shankar Agarwal",
      role: "Director",
      image: "/videos/img555.jpeg",
    },
    {
      name: "Shri Bhavesh Kumar Surana",
      role: "Director",
      image: "/videos/img55.jpeg",
    },
  ];

 

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Leadership</h1>
      <p style={styles.subheading}>Meet the team driving our mission forward</p>
      <div style={styles.leadersContainer}>
        {leaders.map((leader, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={leader.image} alt={leader.name} style={styles.image} />
            </div>
            <h3 style={styles.name}>{leader.name}</h3>
            <p style={styles.role}>{leader.role}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor:"#FFFAF0",
  },
  heading: {
    fontSize: "38px",
    color: "#ff8c00", // Orange color
    fontWeight: "bold",
  },
  subheading: {
    fontSize: "18px",
    color: "#6b7280", // Gray color
    marginBottom: "40px",
  },
  leadersContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px", // Space between leader cards
  },
  imageContainer: {
    width: "200px",
    height: "200px",
    borderRadius: "50%", // Circular image container
    overflow: "hidden", // Hide any overflow if the image is larger
    marginBottom: "15px", // Space between image and name
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "20px",
    color: "#585858", // Dark gray color
    margin: "5px 0",
  },
  role: {
    fontSize: "14px",
    color: "#6b7280", // Gray color
  },

  
};

export default Leadership;