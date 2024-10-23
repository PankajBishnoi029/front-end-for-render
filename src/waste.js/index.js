// admin start here

// app.post("/signupAdmin", async (req, res) => {
//   const { Aid, Aname, address, phone, Aemail, password } = req.body;

//   if (!Aname || !address || !phone || !Aemail || !password) {
//     return res.json({ message: "Please provide all the required fields" });
//   }

//   let autoDoc;
//   try {
//     autoDoc = await Auto.findOne();

//     if (!autoDoc) {
//       autoDoc = new Auto({
//         Uid: "0",
//         Aid: "0",
//         id: "0",
//       });
//       await autoDoc.save();
//     }

//     autoDoc.Aid = (parseInt(autoDoc.Aid, 10) + 1).toString();
//     await autoDoc.save();
//   } catch (err) {
//     console.log("Error saving Auto:", err);
//     return res.json({ message: "Database error" });
//   }

//   try {
//     const existingAdmin = await Admin.findOne({ Aid });

//     if (existingAdmin) {
//       return res.json({ message: "Admin ID already exists" });
//     }

//     const newAdmin = new Admin({
//       Aid: autoDoc.Aid,
//       Aname,
//       address,
//       phone,
//       Aemail,
//       password,
//     });

//     await newAdmin.save();

//     return res.status(201).json({
//       message: "Signup success",
//       user: { Aid: autoDoc.Aid, Aname, address, phone, Aemail, password },
//     });
//   } catch (err) {
//     console.log("Error saving Admin:", err);
//     return res.json({ message: "Database error" });
//   }
// });

// app.post("/signupAdmin", async (req, res) => {
//   const { Aid, Aname, address, phone, Aemail, password } = req.body;

//   if (!Aid) {
//     return res.json({ message: "Aid" });
//   }
//   if (!Aname) {
//     return res.json({ message: "Please provide Aname" });
//   }
//   if (!address) {
//     return res.json({ message: "address" });
//   }
//   if (!phone) {
//     return res.json({ message: "phone" });
//   }
//   if (!Aemail) {
//     return res.json({ message: "Aemail" });
//   }
//   if (!password) {
//     return res.json({ message: "password" });
//   }

//   try {
//     // Retrieve all admins from the database
//     const admins = await Admin.find({});

//     // Use a for loop to check if the Aid already exists
//     for (let i = 0; i < admins.length; i++) {
//       if (admins[i].Aemail === Aemail) {
//         return res.json({ message: "Admin ID already exists" });
//       }
//     }

//     try {
//       const auto = await auto.findOne();

//       if (!auto) {
//         const auto = new auto({
//           Uid: 0,
//           Aid: 0,
//           id: 0,
//         });
//         await auto.save();
//       }
//       const no = await auto.findOne();
//       no.Aid++;
//     } catch {
//       console.log("Error saving Admin:");
//     }

//     const newAdmin = new Admin({
//       Aid,
//       Aname,
//       address,
//       phone,
//       Aemail,
//       password,
//     });

//     await newAdmin.save();
//     return res.status(201).json({
//       message: "Signup success",
//       user: { Aid, Aname, address, phone, Aemail, password },
//     });
//   } catch (err) {
//     console.log("Error saving Admin:", err);
//     return res.json({ message: "Database error" });
//   }
// });

// if (!Aid) {
//   return res.json({ message: "Aid" });
// }

// 1234567890----=][poiuytrewqasdfghjkl;'/.,mnbvcxz]
// new end***

// app.post("/add-product", async (req, res) => {
//   const { Aid, id, name, description, price, image } = req.body;

//   if (!Aid || !id || !name || !description || !price || !image) {
//     return res.json({ message: "Please provide all the required fields" });
//   }

//   try {
//     const user = await Admin.findOne({ Aid });

//     if (!user) {
//       return res.json({ message: "User does not exist" });
//     }

//     const existingProduct = user.Products;
//     console.log(existingProduct);

//     for (let i = 0; i < existingProduct.length; i++) {
//       if (existingProduct[i].id === id) {
//         return res.json({ message: "Product already added" });
//       }
//     }

// put    user.Products.push({ id, name, description, price, image });

//     await user.save();

//     return res.json({ message: "Product added successfully", user });
//   } catch (err) {
//     console.error("Error adding product:", err);
//     return res.json({ message: "Database error" });
//   }
// });

// Route to update a product

// for (let i = 0; i < admin.Products.length; i++) {
//   if (admin.Products[i].id === id) {
//     return res.json({ message: "Product already added" });
//   }
// }

// app.post("/add-product", async (req, res) => {
//   const { Aemail, name, description, price, image } = req.body;

//   if (!Aemail || !name || !description || !price || !image) {
//     return res.json({ message: "Please provide all the required fields" });
//   }

//   try {
//     const admin = await Admin.findOne({ Aemail });

//     if (!admin) {
//       return res.json({ message: "Admin does not exist" });
//     }

//     let productExists = false;
//     for (let i = 0; i < admin.Products.length; i++) {
//       if (admin.Products[i].name === name) {
//         productExists = true;
//         break;
//       }
//     }

//     if (productExists) {
//       return res.json({ message: "Product with this name already exists" });
//     }

//     let auto = await Auto.findOne({ id: "id" });

//     if (!auto) {
//       auto = new Auto({ id: "productId", currentId: 1 });
//     } else {
//       auto.currentId = auto.currentId + 1;
//     }

//     await auto.save();

//     const newProductId = auto.currentId.toString();

//     admin.Products.push({ id: newProductId, name, description, price, image });
//     await admin.save();

//     return res.json({ message: "Product added successfully", user: admin });
//   } catch (err) {
//     console.log("Error adding product:", err);
//     return res.json({ message: "Database error" });
//   }
// });
//

// Export the app if you're using module.exports
// Route to delete a product
// app.post("/delete-product", async (req, res) => {
//   const { Aid, productId } = req.body;

//   if (!Aid || !productId) {
//     return res
//       .status(400)
//       .json({ message: "Admin ID and product ID are required." });
//   }

//   try {
//     const admin = await Admin.findOne({ Aid });

//     if (!admin) {
//       return res.status(404).json({ message: "Admin not found." });
//     }

//     let productFound = false;

//     for (let i = 0; i < admin.Products.length; i++) {
//       if (admin.Products[i].id === productId) {
//         admin.Products.splice(i, 1);
//         productFound = true;
//         break;
//       }
//     }

//     if (!productFound) {
//       return res.status(404).json({ message: "Product not found." });
//     }

//     await admin.save();

//     return res.json({ message: "Product deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting product:", error);
//     return res.status(500).json({ message: "Database error" });
//   }
// });

//admin pannel end

//***** */

//user start
// Fetch all products from all admins

//
//
//
//************* */
//user route start here

// app.post("/signup", async (req, res) => {
//   const { Uid, Uname, address, phone, Uemail, password } = req.body;

//   if (!Uname || !address || !phone || !Uemail || !password) {
//     return res
//       .status(400)
//       .json({ message: "Please provide all the required fields" });
//   }

//   try {
//     // Find or create an entry in the Auto collection
//     let auto = await Auto.findOne({});
//     if (!auto) {
//       // Create the first entry if it doesn't exist
//       auto = new Auto({ Aid: "0001" }); // Start with "0001"
//       await auto.save();
//     } else {
//       // Increment the Aid
//       let currentUid = parseInt(auto.Uid, 10); // Convert Aid to a number
//       currentUid += 1;
//       auto.Uid = currentUid.toString().padStart(4, "0"); // Convert back to string with leading zeros
//       await auto.save();
//     }

//     // Create a new customer with the incremented Aid
//     const newCustomer = new Customer({
//       Uid, // Assign the incremented Aid
//       Uname,
//       address,
//       phone,
//       Uemail,
//       password,
//     });
//     console.log(newCustomer);

//     await newCustomer.save();
//     res.status(201).json({
//       message: "Signup successful! Welcome to our platform.",
//       user: { Uid, Aid: auto.Aid, Uname, address, phone, Uemail, password },
//     });
//   } catch (err) {
//     console.log("Error saving customer:", err);
//     return res.status(500).json({ message: "Database error" });
//   }
// });

//
//
//
//
//Route to login user ****
// app.post("/login", async (req, res) => {
//   const { Uemail, password } = req.body;

//   if (!Uemail) {
//     return res.status(400).json({ message: "uemail are required" });
//   }
//   if (!password) {
//     return res.status(400).json({ message: "password are required" });
//   }

//   try {
//     const user = await Customer.findOne({ Uemail });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (user.Uemail !== Uemail) {
//       return res.status(401).json({ message: "try again" });
//     }

//     if (user.password !== password) {
//       return res.status(401).json({ message: "Wrong password" });
//     }

//     return res.status(200).json({ message: "Login successful", user });
//   } catch (err) {
//     console.error("Error finding customer:", err);
//     return res.status(500).json({ message: "Database error" });
//   }
// });

//Route to purchase course ****
// app.post("/purchase", async (req, res) => {
//   const { Uemail, id, name, description, price, image } = req.body;

//   if (!Uemail) {
//     return res.json({ message: "Please provide your email" });
//   }

//   if (!name) {
//     return res.json({ message: "Please provide a name" });
//   }

//   if (!description) {
//     return res.json({ message: "Please provide a description" });
//   }

//   if (!price) {
//     return res.json({ message: "Please provide a price" });
//   }

//   if (!image) {
//     return res.json({ message: "Please provide an image" });
//   }

//   try {
//     const user = await Customer.findOne({ Uemail });

//     if (!user) {
//       return res.json({ message: "User does not exist" });
//     }

//     const existingProduct = user.purchasedProducts;
//     console.log(existingProduct);

//     for (let i = 0; i < existingProduct.length; i++) {
//       if (existingProduct[i].Uemail == Uemail) {
//         return res.send({ message: "Product already purchased" });
//       }
//     }

//     user.purchasedProducts.push({
//       Uemail,
//       id,
//       name,
//       description,
//       price,
//       image,
//     });

//     await user.save();

//     return res.json({ message: "Product purchased successfully", user });
//   } catch (err) {
//     console.log("Error purchasing product:", err);
//     return res.json({ message: "Database error" });
//   }
// });

//Route to get all purchased courses ****
// app.post("/purchased-courses", async (req, res) => {
//   const { Uemail } = req.body;

//   if (!Uemail) {
//     return res.json({ message: "Uemail is required" });
//   }

//   try {
//     const user = await Customer.findOne({ Uemail });

//     if (!user) {
//       return res.json({ message: "User not found" });
//     }

//     return res.json({ courses: user.purchasedProducts });
//   } catch (err) {
//     console.log("Error finding purchased courses:", err);
//     return res.json({ message: "Database error" });
//   }
// });
// Example of backend route definition
