import { Head } from '@inertiajs/react'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>

        <span>
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
      </div>

      <button className="bg-blue-500">Button</button>

      <div className="flex flex-col justify-center items-center gap-4 p-8 m-8 w-full max-w-sm border border-gray-200 rounded-md">
        <span>Daisy UI Button</span>

        <button className="btn">Button</button>
      </div>
    </>
  )
}
