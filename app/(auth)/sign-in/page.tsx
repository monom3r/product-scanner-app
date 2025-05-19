'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

const SignIn = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: 'google' })
  }

  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href='/'>
          <h1>Vera</h1>
        </Link>

        <div className='description'>
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src='/assets/icons/star.svg'
                  alt='Star'
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>

            <p>
              From scanning ingredients to sharing your skincare routine, it’s
              smart, social, and built to help you feel confident in every
              product you use.
            </p>

            <article>
              <Image
                src='/assets/images/ozum.png'
                alt='Jason'
                width={64}
                height={64}
                className='rounded-full border-white aspect-square object-cover'
              />

              <div>
                <h2>Özüm Yıldızeli</h2>
              </div>
            </article>
          </section>
        </div>

        <p className='text-brown-100'>© Vera 2025</p>
      </aside>

      <aside className='google-sign-in'>
        <section>
          <Link href='/'>
            <h1>Vera</h1>
          </Link>

          <p>
            Scan a product and start your first <span>skincare journey</span>{' '}
            today!
          </p>

          <button onClick={handleSignIn}>
            <Image
              src='/assets/icons/google.svg'
              alt='Google Icon'
              width={22}
              height={22}
            />

            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>

      <div className='overlay' />
    </main>
  );
};

export default SignIn;
