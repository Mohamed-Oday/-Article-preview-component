const shareBtn = document.getElementById('share-btn')
const shareBtnSocials = document.getElementById('share-btn-socials')
const shareArrow = document.getElementById('share-arrow')

shareBtn.addEventListener('click', () => {
    if (shareBtnSocials.classList.contains('hidden') && shareArrow.classList.contains('hidden')){
        shareBtnSocials.classList.remove('hidden')
        shareArrow.classList.remove('hidden')
        shareBtn.classList.add('mt-[30px]')
    }
    else{
        shareBtnSocials.classList.add('hidden')
        shareArrow.classList.add('hidden')
        shareBtn.classList.remove('mt-[30px]')
    }
})