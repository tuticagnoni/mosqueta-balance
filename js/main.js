$(document).ready(function(){
    $("#accordionRecetas").click(function(){
        let elem = $("#accordionRecetas").find("[aria-expanded=true]");
        let id = $(elem[0]).attr("data-bs-target");

        switch(id) {
            case "#receta1":
                $("#img-receta").attr("src","/assets/receta1.jpeg");
                break;
            case "#receta2":
                $("#img-receta").attr("src","/assets/receta1.jpeg");
                break;
            case "#receta3":
                $("#img-receta").attr("src","/assets/receta1.jpeg");
                break;
            case "#receta4":
                $("#img-receta").attr("src","/assets/receta1.jpeg");
                break;
            default:
                $("#img-receta").attr("src","/assets/OpenDoodles-Coffee.png");
                break;
        }
    });
});
