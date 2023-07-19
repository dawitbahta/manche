import { defineStore } from "pinia";

export const useNavBarStore = defineStore({
    id: "navbar",
    state: () => ({
        style: 'bg-secondary text-white',
        secondaryStyle: 'fill-gray-100 text-gray-100',
        logoStyle:"text-primary",
        showNavBar: false,
        showMenu: false,
        selectedProject: 1,
    }),actions:{
        toggleNavBar(){
            this.showNavBar = !this.showNavBar;
        },
        toggleMenu(){
            this.showMenu = !this.showMenu;
            if (this.showMenu)
                this.style= 'bg-white text-black';
        },
        setProjectsNavBarTheme () {
            switch (this.selectedProject){
                case 1:
                    this.setNavBarTheme('bg-purple-600 text-purple-50', 'text-purple-50 fill-purple-50', 'text-[#B8BFC6]');
                    break;
                case 2:
                    this.setNavBarTheme('bg-gray-700 text-gray-50', 'text-gray-50 fill-gray-50', 'text-amber-400');
                    break;
                case 3:
                    this.setNavBarTheme('bg-orange-700 text-orange-50', 'text-white fill-white', 'text-orange-200');
                    break;
                case 4:
                    this.setNavBarTheme('bg-blue-700 text-blue-50', 'text-blue-50 fill-blue-50', 'text-amber-400');
                    break;
                case 5:
                    this.setNavBarTheme('bg-red-600 text-red-50', 'text-red-50 fill-red-50', 'text-[#2E2E2E]');
                    break;
                case 6:
                    this.setNavBarTheme('bg-white text-black', 'text-gray-800 fill-gray-800', 'text-primary');
                    break;
                case 7:
                    this.setNavBarTheme('bg-yellow-600 text-yellow-50', 'text-yellow-50 fill-yellow-50', 'text-[#37323E]');
                    break;
                default:
                    break;
            }
        },
        setNavBarTheme (style, secondaryStyle, logoStyle) {
            this.style = style;
            this.secondaryStyle = secondaryStyle;
            this.logoStyle = logoStyle;
        }
       },
});