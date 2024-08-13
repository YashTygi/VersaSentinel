'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Report {
    params: {
        slug: string
    }
}

interface ReportData {
    patientID: string;
    transcription: string;
    sentiment: number;
    speaker: number;
    totalfillerwords: number;
    totatime: number;
    condition: string[];
    medications: string[];
}

const ReportPage = ({ params }: Report) => {
  const router = useRouter();
  const { slug } = params;
  const [data, setData] = useState<ReportData | null>(null);

  useEffect(() => {
    if (slug) {
      const storedData = localStorage.getItem(slug as string);
      if (storedData) {
        setData(JSON.parse(storedData));
      }
    }
  }, [slug]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const isAdverseEvent = data.condition.length > 0 && data.medications.length > 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Report for Patient ID: {params.slug}</h1>
      
      <div className="space-y-4">
        <p><strong>Patient ID:</strong> {data.patientID}</p>
        <p><strong>Transcription:</strong> {data.transcription}</p>
        <p><strong>Sentiment:</strong> {data.sentiment}</p>
        <p><strong>Speaker:</strong> {data.speaker}</p>
        <p><strong>Total Filler Words:</strong> {data.totalfillerwords}</p>
        <p><strong>Total Time:</strong> {data.totatime.toFixed(2)} seconds</p>
        
        <div>
          <strong>Conditions:</strong>
          {data.condition.length > 0 ? (
            <ul className="list-disc pl-5">
              {data.condition.map((cond, index) => (
                <li key={index}>{cond}</li>
              ))}
            </ul>
          ) : (
            <p>No conditions reported</p>
          )}
        </div>
        
        <div>
          <strong>Medications:</strong>
          {data.medications.length > 0 ? (
            <ul className="list-disc pl-5">
              {data.medications.map((med, index) => (
                <li key={index}>{med}</li>
              ))}
            </ul>
          ) : (
            <p>No medications reported</p>
          )}
        </div>

        {isAdverseEvent ? 
          <p className="text-red-600 font-bold">Adverse Event</p> : 
          <p className="text-green-600 font-bold">No Adverse Event</p>
        }
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Audio Recording</h2>
      {/* Uncomment and adjust the audio player when you have the audio file
      {data.audio ? (
        <audio controls>
          <source src={data.audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>No audio file available</p>
      )} */}
    </div>
  );
};

export default ReportPage;