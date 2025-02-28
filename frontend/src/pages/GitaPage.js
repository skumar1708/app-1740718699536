import React from 'react';
import Shloka from '../components/Shloka';

const shlokas = [
  {
    devanagari: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः",
    translation: "On the field of righteousness, at Kurukshetra, the warriors assembled, eager to fight."
  },
  {
    devanagari: "मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय",
    translation: "O Sanjaya, what did my sons and the sons of Pandu do when they assembled to fight on the holy field of Kurukshetra?"
  }
  // Add more shlokas as needed
];

function GitaPage() {
  return (
    <div className="gita-page">
      {shlokas.map((shloka, index) => (
        <Shloka key={index} devanagari={shloka.devanagari} translation={shloka.translation} />
      ))}
    </div>
  );
}

export default GitaPage;