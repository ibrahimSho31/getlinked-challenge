import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Congratulations, darkPurpleStar, purpleStar, GreyStar } from './assets';
  
const CongratsDialog = ({open, setOpen}) => {

    
  return (
    <AlertDialog.Root defaultOpen={open}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className='AlertDialogOverlay' />
        <AlertDialog.Content className='AlertDialogContent montserrat text-white flex  
        border-solid border-[1px] border-[#D434FE] rounded-[12px] flex-col items-center
        fixed top-[50%] left-[50%] xl:left-[51%]
        bg-transparent'>
          <>
            <div>
              <AlertDialog.Description className='flex h-[467px] xl:h-[664px] flex-col items-center justify-center px-[50px] xl:pb-[20px]'>

              <div className='flex flex-row items-center'>
              <img 
                src={GreyStar}
                className='absolute mt-[120px] xl:mt-[200px] w-[15px] xl:w-[30px]  blinking'
              />
              <img 
                src={Congratulations}
                className='w-[258px] xl:w-[427px]'
              />
              </div>


                <p className='text-[16px] xl:text-[32px] font-[500] text-center w-[178px] xl:w-[100%]'>
                Congratulations <br /> you have successfully Registered!
                </p>

                <p className='text-[12px] xl:text-[16px] font-[600] text-center leading-[17px] my-[20px] w-[202px] xl:w-[100%]'>
                Yes, it was easy and you did it! <br className='xl:block hidden'/> check your mail box for next step</p>

                <button className="headerBtn w-[179px] xl:w-full h-[53px]" 
                onClick={
                    () => {
                      setOpen(false)
                    }
            }
                >
                            Back
                        </button>

                        <img 
                          src={purpleStar}
                          className='self-end relative mt-[20px] blinking w-[10px] xl:w-[20px]'
                        />
              </AlertDialog.Description>
            </div>
          </>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default CongratsDialog;
