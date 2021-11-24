import React from "react";

export default function GreetingCat() {
  const greetingCatUrl = `https://cataas.com/cat/says/aaaaaa`;

  return (
    <div>
      <header>
        <h3>Greet me</h3>
        <div>
            <img src={greetingCatUrl} width="400px" alt="Cat" />
          </div>
      </header>
    </div>
  );
}
