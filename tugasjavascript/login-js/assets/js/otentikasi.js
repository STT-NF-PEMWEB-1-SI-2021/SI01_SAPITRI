function jalankanAlert() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

     if (username == "ahmad2017" && password == "integrity") {
         Swal.fire(
             'Login Berhasil!',
             'Terimakasih sudah login!',
             'success'
         )
     } else{
         Swal.fire({
             icon: 'error',
             title: 'Tejadi kesalahan',
             text: 'Username atau password yang anda masukkan salah!',
         })
     }
}