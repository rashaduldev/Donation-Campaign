import Card from "../Card/Card";
import Statistics from "../Statistics/Statistics";

const ParentComponent = () => {
    const [sumOfValues, setSumOfValues] = useState(0);
  
    // Function to update the sumOfValues when a "Donate" button is clicked
    const updateSumOfValues = (donationAmount) => {
      setSumOfValues(sumOfValues + donationAmount);
    };
  
    const cardData1 = { /* your card data */ };
    const cardData2 = { /* your card data */ };
    // Define other card data as needed
  
    return (
      <div>
        <Card data={cardData1} updateSumOfValues={updateSumOfValues}    ></Card>
       <Card data={cardData2} updateSumOfValues={updateSumOfValues}></Card>
        {/* Render other cards as needed */}
        <Statistics sumOfValues={sumOfValues}></Statistics>
      </div>
    );
  };
  
  export default ParentComponent;