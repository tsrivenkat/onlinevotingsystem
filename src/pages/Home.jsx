import { Link } from "react-router-dom"
import { Vote, ShieldCheck, BarChart4 } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Modern Online</span>
          <span className="block text-purple-600 dark:text-purple-400">Voting System</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Secure, transparent, and accessible voting for everyone. Exercise your democratic right from anywhere.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/register"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
            >
              Register to Vote
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <Link
              to="/login"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-12 bg-gray-100 dark:bg-gray-800 rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 dark:text-purple-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A better way to vote
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Our platform provides a secure and convenient way to participate in democratic processes.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <Vote className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Easy Voting</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Vote from anywhere with an internet connection. No more waiting in lines.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Secure & Private</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Advanced encryption ensures your vote remains secure and your identity protected.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <BarChart4 className="h-6 w-6" />
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Real-time Results</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    View election results as they come in with detailed analytics and visualizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-purple-600 dark:bg-purple-700 rounded-xl mt-12">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Register today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-purple-200">
            Join thousands of voters who have already made the switch to digital voting.
          </p>
          <Link
            to="/register"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  )
}
