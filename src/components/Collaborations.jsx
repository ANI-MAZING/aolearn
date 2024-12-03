import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

function Collaborations() {
  return (
    <>
    <div className="flex flex-row gap-5">
    <Card className="bg-neutral-900 border border-orange-700 w-full  sm:w-1/2 lg:w-1/3 p-2">
    <CardHeader color="blue-gray" className="realtive">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody>
      {/* <Typography variant="h5" color="" className="mb-2 ">
        UI/UX Review Check
      </Typography> */}

      <h1 className="text-4xl sm:text-2xl lg:text-3xl mt-2 mb-2 text-left  tracking-wide bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">AO | Analytics</h1>
      <Typography color="white">
        The place is close to Barceloneta Beach and bus stop just 2 min by
        walk and near to &quot;Naviglio&quot; where you can enjoy the main
        night life in Barcelona.
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>
    <Card className="bg-neutral-900 border border-orange-700 w-full sm:w-1/2 lg:w-1/3 p-2">
    <CardHeader color="blue-gray" className="relative h-56">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody>
      {/* <Typography variant="h5" color="" className="mb-2 ">
        UI/UX Review Check
      </Typography> */}

      <h1 className="text-4xl sm:text-2xl lg:text-3xl mt-2 mb-2 text-left  tracking-wide bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">AO | Analytics</h1>
      <Typography color="white">
        The place is close to Barceloneta Beach and bus stop just 2 min by
        walk and near to &quot;Naviglio&quot; where you can enjoy the main
        night life in Barcelona.
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>
    <Card className="bg-neutral-900 border border-orange-700 w-full sm:w-1/2 lg:w-1/3 p-2">
    <CardHeader color="blue-gray" className="relative h-56">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody>
      {/* <Typography variant="h5" color="" className="mb-2 ">
        UI/UX Review Check
      </Typography> */}

      <h1 className="text-4xl sm:text-2xl lg:text-3xl mt-2 mb-2 text-left  tracking-wide bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">AO | Analytics</h1>
      <Typography color="white">
        The place is close to Barceloneta Beach and bus stop just 2 min by
        walk and near to &quot;Naviglio&quot; where you can enjoy the main
        night life in Barcelona.
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>

  </div>
  </>
  )
}

export default Collaborations

