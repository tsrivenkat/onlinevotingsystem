"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Results() {
  const [selectedElection, setSelectedElection] = useState("presidential");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const elections = [
    { id: "presidential", name: "Presidential Election 2024" },
    { id: "local", name: "Local Council Election 2023" },
    { id: "school", name: "School Board Election 2024" },
  ];

  const COLORS = ["#8b5cf6", "#ec4899", "#3b82f6", "#10b981"];

  const presidentialData = [
    {
      name: "N CBN",
      votes: 1234,
      percentage: 42,
      party: "Progressive Party",
    },
    {
      name: "Pawan Kalyan",
      votes: 987,
      percentage: 33,
      party: "Conservative Party",
    },
    {
      name: "Narendra Modi",
      votes: 456,
      percentage: 15,
      party: "Liberty Party",
    },
    { name: "KA Paul", votes: 321, percentage: 10, party: "Green Party" },
  ];

  const localData = [
    {
      name: "Robert Wilson",
      votes: 567,
      percentage: 38,
      party: "Progressive Party",
    },
    {
      name: "Sarah Lee",
      votes: 432,
      percentage: 29,
      party: "Conservative Party",
    },
    { name: "David Kim", votes: 321, percentage: 21, party: "Liberty Party" },
    { name: "Lisa Chen", votes: 178, percentage: 12, party: "Green Party" },
  ];

  const schoolData = [
    {
      name: "Michael Brown",
      votes: 345,
      percentage: 45,
      party: "Progressive Party",
    },
    {
      name: "Jennifer White",
      votes: 234,
      percentage: 30,
      party: "Conservative Party",
    },
    {
      name: "Thomas Clark",
      votes: 123,
      percentage: 16,
      party: "Liberty Party",
    },
    { name: "Patricia Moore", votes: 67, percentage: 9, party: "Green Party" },
  ];

  const getElectionData = () => {
    switch (selectedElection) {
      case "presidential":
        return presidentialData;
      case "local":
        return localData;
      case "school":
        return schoolData;
      default:
        return presidentialData;
    }
  };

  const getElectionName = () => {
    return elections.find((e) => e.id === selectedElection)?.name || "";
  };

  const data = getElectionData();
  const totalVotes = data.reduce((sum, item) => sum + item.votes, 0);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Election Results
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          View the results of past and ongoing elections
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 mb-8">
        <div className="relative mb-6">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-4 py-2 text-left text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md"
          >
            <span>{getElectionName()}</span>
            {isDropdownOpen ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 rounded-md shadow-lg">
              {elections.map((election) => (
                <button
                  key={election.id}
                  onClick={() => {
                    setSelectedElection(election.id);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {election.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Vote Distribution
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="votes"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} votes`, "Votes"]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Vote Counts
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} votes`, "Votes"]} />
                  <Legend />
                  <Bar dataKey="votes" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Detailed Results
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Candidate
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Party
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Votes
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {data.map((candidate, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {candidate.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {candidate.party}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {candidate.votes.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <span className="mr-2">{candidate.percentage}%</span>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                        <div
                          className="bg-purple-600 h-2.5 rounded-full"
                          style={{ width: `${candidate.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="row"
                  colSpan={2}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Total
                </th>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  {totalVotes.toLocaleString()}
                </td>
                <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  100%
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
