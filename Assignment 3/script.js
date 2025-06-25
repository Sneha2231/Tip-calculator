function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercent = parseFloat(document.getElementById("tipPercent").value);
  
    const resultBox = document.getElementById("resultBox");
  
    if (isNaN(billAmount) || isNaN(tipPercent) || billAmount < 0 || tipPercent < 0) {
      resultBox.innerHTML = "Please enter valid amounts.";
      return;
    }
  
    const tipAmount = (billAmount * tipPercent) / 100;
    const totalAmount = billAmount + tipAmount;
  
    resultBox.innerHTML = `
      💡 Tip Amount: ₹${tipAmount.toFixed(2)}<br/>
      💰 Total Amount: ₹${totalAmount.toFixed(2)}
    `;
  }