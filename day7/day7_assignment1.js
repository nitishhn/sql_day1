
1.Create a node program  to implement the following requirement:
		 a. Create a promise that will generate a random number between 1 to 50
		 b. If the number is 5 multiple,  resolve the send that number
		 c. Else, reject with error message.
		 d.Consume the promise object 
		 e. run the application multiple times to observer the success/error message.


->
function generateRandomNumber() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        if (randomNumber % 5 === 0) {
            resolve(randomNumber);
        } else {
            reject(new Error("Number is not a multiple of 5"));
        }
    });
}

generateRandomNumber()
    .then(number => console.log("Success! Random number generated:", number))
    .catch(error => console.error("Error:", error.message));

2.  Create a node program  to display users data.  
		url :  https://reqres.in/api/users/

->
const axios = require('axios');


function displayUserData() {
   
    axios.get('https://reqres.in/api/users/')
        .then(response => {
            // Extracting user data from the response
            const userData = response.data.data;

          
            console.log("User Data:");
            userData.forEach(user => {
                console.log(`ID: ${user.id}, Name: ${user.first_name} ${user.last_name}, Email: ${user.email}`);
            });
        })
        .catch(error => {
            // Handling errors
            console.error('Error fetching user data:', error.message);
        });
}

// Call the function to display user data
displayUserData();



3. Update the previous example using Async and Await.

->
// Importing the axios library for making HTTP requests
const axios = require('axios');


async function displayUserData() {
    try {
        
        const response = await axios.get('https://reqres.in/api/users/');
        
        
        const userData = response.data.data;

       
        console.log("User Data:");
        userData.forEach(user => {
            console.log(`ID: ${user.id}, Name: ${user.first_name} ${user.last_name}, Email: ${user.email}`);
        });
    } catch (error) {
        
        console.error('Error fetching user data:', error.message);
    }
}

// Call the function to display user data
displayUserData();

4.  Create a function  called getCustomerByCountry() that takes the country name as parameter and should return customers data based on the given country. 

		a.  Url :   https://www.w3schools.com/angular/customers.php
		b.  use async and await if required. 
->    

const axios = require('axios');

async function getCustomerByCountry(countryName) {
    try {
      
        const response = await axios.get('https://www.w3schools.com/angular/customers.php');
        
        
        const customers = response.data.records;

        
        const customersInCountry = customers.filter(customer => customer.Country === countryName);

        return customersInCountry;
    } catch (error) {
        
        console.error('Error fetching customer data:', error.message);
        return []; // Returning an empty array in case of error
    }
}

// Example usage:
(async () => {
    const customersInUK = await getCustomerByCountry('UK');
    console.log("Customers in UK:", customersInUK);
})();



