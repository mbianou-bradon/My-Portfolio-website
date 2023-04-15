import React from 'react'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom'

function OverviewBlog() {
  return (
    <div className="bg-[#25262a] py-10 sm:py-20 px-4 sm:px-20">
        <div>
            <div className="mb-8">
                <h2 className="text-4xl mb-2">Latest Blog Posts</h2>
                <p className="text-xs text-tertiary">Sharing personal experience and knowledge with the world</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            <div className="mt-10 text-center">
                <Link to="/blogs">
                    <div className="text-secondary underline cursor-pointer font-semibold text-xl mb-2 hover:no-underline w-fit mx-auto">
                        <h2>MORE</h2>
                    </div>
                </Link>
                <p className="text-[0.5rem] text-tertiary w-[50%] mx-auto">*you can read more of my posts and tutorials on <span className="text-secondary underline cursor-pointer hover:no-underline"><a href="https://dev.to/mbianoubradon">dev.to</a></span></p>
            </div>
        </div>
    </div>
  )
}

export default OverviewBlog
