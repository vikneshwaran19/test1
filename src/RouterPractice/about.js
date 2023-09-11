import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Heading from './Heading';
function ContactForm() {
  const [state, handleSubmit] = useForm("mzblgkdr");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (

    <>
    <Heading />
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <div class="relative mb-3" data-te-input-wrapper-init>

      <input
        id="email"
        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        type="email" 
        name="email"
        placeholder='Email'
      />
      </div>
   


      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </>

  );
}
const AboutPage =() => {
  return (
    <ContactForm />
  );
}
export default AboutPage;