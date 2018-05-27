package main

import (
	"log"
	"net/http"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {

	log.Println("got request: ")
	w.Write([]byte("Everythings Good"))
}

func helloHandler(w http.ResponseWriter, r *http.Request) {

	log.Println("got hello")
	w.Write([]byte("{'hello':'world'}"))
}

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/hello", helloHandler)
	if err := http.ListenAndServe(":80", nil); err != nil {
		log.Fatalf("ERROR: %s", err)
	}
}
