"use client";

import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

type EducationItem = {
  degree: string;
  place: string;
  period: string;
  extra?: string;
};

const education: EducationItem[] = [
  {
    degree: "B.Sc. (Hons) in Software Engineering — GPA: 3.67",
    place: "CINEC Campus, Malabe",
    period: "2020 – 2024",
    extra: "Leader of CINEC Web Development Team; Led Research Symposium Team; President of TECHSTRIKE Club (2022–2023)",
  },
  {
    degree: "Diploma in Information Technology",
    place: "ESOFT Metro Campus, Galle",
    period: "2016 – 2018",
  },
  {
    degree: "G.C.E Advanced Level — Z-score: 0.8702",
    place: "Vidyaloka College, Galle",
    period: "2019",
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic Background">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <Card key={item.degree + item.place} className="p-5">
            <h3 className="text-lg font-semibold">{item.degree}</h3>
            <p className="text-sm text-[var(--muted)]">{item.place}</p>
            <p className="text-sm text-[var(--muted)] mt-1">{item.period}</p>
            {item.extra && <p className="text-sm text-[var(--muted)] mt-2">{item.extra}</p>}
          </Card>
        ))}
      </div>
    </Section>
  );
}


