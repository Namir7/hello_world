export default async () => {
   const loaded = new Promise((res) => {
      document.addEventListener('DOMContentLoaded', () => {
         res();
      });
   });

   const timer = new Promise((res) => {
      const interval = 2000;

      setTimeout(() => {
         res()
      }, interval)
   })

   await Promise.all([loaded, timer]);

   const loader = document.querySelector('#start-app-loader');
   loader.style.display = 'none';
}