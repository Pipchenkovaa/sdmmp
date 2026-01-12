import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../public/Logo.svg'

type Props = {
  closeNavbar?: () => void
}

export const Logo = ({ closeNavbar }: Props) => (
  <Link onClick={closeNavbar} href="/" className='flex gap-1 items-center'>
    <div className='w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] 2xl:w-[84px] 2xl:h-[84px] content-center'>
      <Image src={logo} alt="SDM Logo" width={120} height={120} priority />
    </div>
    {/* <span className="font-semibold">SDM</span> */}
  </Link>
)
