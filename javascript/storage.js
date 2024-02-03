local Storage
> Presistant Storage
> wrt to browser
> we have to remove manually

localStorage.setItem('mycity','Delhi')
undefined
localStorage.getItem('mycity')
'Delhi'
localStorage.removeItem('mycity')
undefined
localStorage.getItem('mycity')
null
localStorage.setItem('mycity','Delhi')

sessionStorage
> temp Storage
> save wrt to tab
> remove as soon as you close tab

sessionStorage.setItem('price',80)
undefined
sessionStorage.getItem('price')
'80'
sessionStorage.removeItem('price')

cookies
> save wrt to website
> expires in time


document.cookie
'_ga_1FJ2RQ09E7=GS1.1.1706949970.1.0.1706949970.0.0.0; _ga=GA1.2.216256209.1706949970; _gid=GA1.2.1152305924.1706949971; _gat_gtag_UA_131256843_1=1'
/favicon.ico:1 

document.cookie='city=delhi; expires=Sun, 4 Feb 2024 13:00:00 UTC'
'city=delhi; expires=Sun, 4 Feb 2024 13:00:00 UTC'
document.cookie
'_ga_1FJ2RQ09E7=GS1.1.1706949970.1.0.1706949970.0.0.0; _ga=GA1.2.216256209.1706949970; _gid=GA1.2.1152305924.1706949971; city=delhi'