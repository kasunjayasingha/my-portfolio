import { Section } from "../ui/Section";
import { StatCard } from "../ui/StatCard";
import { FaStar, FaProjectDiagram, FaTools, FaUsers } from "react-icons/fa";

export default function Impact() {
  return (
    <Section id="impact" title="Professional Impact" subtitle="Engineering results through repeatable technology solutions">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={<FaUsers />} value="3+" label="Years of Experience" />
        <StatCard icon={<FaProjectDiagram />} value="8+" label="Projects Completed" />
        <StatCard icon={<FaTools />} value="7+" label="Stacks & Platforms" />
        <StatCard icon={<FaStar />} value="5+" label="Mentor / Clients" />
      </div>
    </Section>
  );
}


