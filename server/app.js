const express = require("express")
const app = express()
const cors = require("cors")
const colors = require("colors")
const stripe = require("stripe")("sk_test_51QHQjLDBKnUO9RkZHvhZXZI7LGUBI4lhOtqK2NpoUwYwOgR07Jfny6fRJtwyPASXjqPutL7UlqxtYCpaf6QlwxU800GQWkQjwI")
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.post("/api/payment", async (req, res) => {
    try {
      const { products } = req.body;
  
      const lineItems = products.map((product) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: product.dish,
          },
          unit_amount: product.price * 100,
        },
        quantity: product.qnty,
      }));
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error("Error creating Stripe session:", error);
      res.status(500).json({ error: "Failed to create payment session" });
    }
  });
  



app.listen(8080,()=>{
    console.log("App listening on port 8080".bgCyan);
})
