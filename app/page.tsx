export default function Page() {
  return (
    <>
      <div className="p-4 text-center text-xl font-medium">
        <p>Welcome to Devramid, where innovation meets collaboration in the realm of software development. We are not just a company; we are a community of talented individuals who believe in the power of Pyramid Schemes and Cooperative work to reshape the future of technology.</p>

        <p className="pt-8 pb-2 font-bold">Join Devramid and Elevate Your Career:</p>
        <p>Whether you&apos;re a seasoned developer looking for a new challenge or a recent graduate eager to kickstart your career, Devramid welcomes individuals who are passionate about coding, collaboration, and community. Together, let&apos;s build a pyramid of success where each block represents the collective achievements of our Devramid family.</p>

        <div className="flex items-center justify-center p-8">
          <form action="https://formbold.com/s/oJKNe" method="POST">
            <div className="grid w-80 grid-rows-4 gap-1">
              <p className="font-bold text-gray-700">Join us</p>
              <input type="email" name="Email" className="h-10 w-full rounded border p-2 text-sm" placeholder="Your email" />
              <button type="submit" className="rounded bg-[#FD5E57] text-gray-50 hover:bg-gradient-to-r hover:from-[#FD5E57] hover:to-[#FC477E]">Subscribe to the newsletter</button>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}