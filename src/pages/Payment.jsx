import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// import de checkoutform
import CheckoutForm from "../Components/CheckoutForm.jsx";

const Payment = () => {
  //Je me connecte à stripe
  const stripePromise = loadStripe(
    "pk_test_51Pv1p72NoEt5S90bGz5z3IXA7YPkkQlU89QjFn8UFGiXYbSewU1UQs12cywAWdZhOhmeMPsEVhV3e0WMS7aK9HKk00P5s1Yyx0"
  );
  const options = {
    // Montant de la transaction
    amount: 20,
    // Devise de la transaction
    currency: "eur",
    // On peut customiser l'apparence ici
    appearance: {
      /*...*/
    },
  };
  console.log(options);
  return (
    // Le composant Elements doit contenir toute notre logique de paiement
    // On lui donner la preuve que nous sommes connectés et les options de paiement
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
