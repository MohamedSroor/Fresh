//search in website
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function liveSearch() {
  let cards = document.querySelectorAll('.box')
  let search_query = document.getElementById("searchbox").value;
  for (var i = 0; i < cards.length; i++) {
    if(cards[i].innerText.toLowerCase()
      .includes(search_query.toLowerCase())) {
      cards[i].classList.remove("is-hidden");
      } 
      else {
        cards[i].classList.add("is-hidden");
      }
    }
}

  
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});


$(document).ready(function() {
    $('select').niceSelect();
  });

  
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

function checkout() {
  alert("Your request has been executed Successfully And Will Be Shipped Within 1-5 Days");
}

var NumItems = document.getElementById("NumItems"); 
var numberOfItems = NumItems.textContent;

function removeI1() {
  document.getElementById("item1").style.display = "none";  
  if (document.getElementById("NumItems").matches="3 Items") {
    document.getElementById("NumItems").innerHTML="2 Items";
  } else{
    document.getElementById("NumItems").innerHTML="1 Items";
  }
}

function removeI2() {
  document.getElementById("item2").style.display = "none";
  if (numberOfItems == "3 Items") {
    document.getElementById("NumItems").innerHTML="2 Item";
  }else{
    document.getElementById("NumItems").innerHTML="1 Item";
  }
}

function removeI3() {
  document.getElementById("item3").style.display = "none";
  if (numberOfItems="2 Items") {
    document.getElementById("NumItems").innerHTML= "0 Item";
  } else{
    document.getElementById("NumItems").innerHTML= "0 Items";
  }
}