import React from 'react';

export default function Main() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  let name = 'abdulbasit';
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
