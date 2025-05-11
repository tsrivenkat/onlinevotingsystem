"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const elections = [
    {
      id: 1,
      title: "Presidential Election 2024",
      status: "active",
      endDate: "November 5, 2024",
      candidates: [
        {
          id: 1,
          name: "N Chandra Babu Naidu",
          party: "TDP",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 2,
          name: "K Pawan Kalyan",
          party: "JSP",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 3,
          name: "Narendra Modi",
          party: "BJP",
          image: "/placeholder.svg?height=100&width=100",
        },
        {
          id: 4,
          name: "K A Paul",
          party: "paul party",
          image: "/placeholder.svg?height=100&width=100",
        },
      ],
    },
    {
      id: 2,
      title: "Local Council Election",
      status: "upcoming",
      startDate: "December 10, 2024",
      endDate: "December 15, 2024",
      candidates: [],
    },
    {
      id: 3,
      title: "School Board Election",
      status: "completed",
      endDate: "March 15, 2024",
      candidates: [],
    },
  ];

  const handleVote = () => {
    if (selectedCandidate) {
      setHasVoted(true);
      // Here you would typically send the vote to your backend
      console.log(`Voted for candidate with ID: ${selectedCandidate}`);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            Active
          </span>
        );
      case "upcoming":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
            <Clock className="w-3 h-3 mr-1" />
            Upcoming
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            <AlertCircle className="w-3 h-3 mr-1" />
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Voter Dashboard
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Welcome back,{" "}
          <span className="font-semibold">{user?.name || "Voter"}</span>
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          View active elections and cast your vote
        </p>
      </div>

      <div className="grid gap-8">
        {elections.map((election) => (
          <div
            key={election.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {election.title}
                </h2>
                {getStatusBadge(election.status)}
              </div>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span>Ends: {election.endDate}</span>
              </div>

              {election.status === "active" && (
                <>
                  {hasVoted ? (
                    <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg mb-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                            Vote Recorded
                          </h3>
                          <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                            <p>
                              Thank you for participating in this election. Your
                              vote has been recorded.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Select a candidate:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {election.candidates.map((candidate) => (
                          <div
                            key={candidate.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-colors duration-200 ${
                              selectedCandidate === candidate.id
                                ? "border-purple-500 bg-purple-50 dark:bg-purple-900 dark:border-purple-400"
                                : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                            }`}
                            onClick={() => setSelectedCandidate(candidate.id)}
                          >
                            <div className="flex flex-col items-center">
                              <img
                                src={candidate.image || "/placeholder.svg"}
                                alt={candidate.name}
                                className="w-24 h-24 rounded-full mb-4 object-cover"
                              />
                              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                {candidate.name}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {candidate.party}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        <button
                          onClick={handleVote}
                          disabled={!selectedCandidate}
                          className={`px-6 py-2 rounded-md text-white font-medium ${
                            selectedCandidate
                              ? "bg-purple-600 hover:bg-purple-700"
                              : "bg-gray-400 cursor-not-allowed"
                          }`}
                        >
                          Cast Your Vote
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}

              {election.status === "upcoming" && (
                <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        Upcoming Election
                      </h3>
                      <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                        <p>
                          This election will be available for voting starting{" "}
                          {election.startDate}.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {election.status === "completed" && (
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Election Completed
                      </h3>
                      <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        <p>
                          This election has ended. View the results in the
                          Results section.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
