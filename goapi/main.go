package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func public(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello public!\n"))
}

func private(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello private!\n"))
}

func nowtime(w http.ResponseWriter, r *http.Request) {
	nowtime := time.Now()
	utc := nowtime.UTC()
	jst := time.FixedZone("Asia/Tokyo",9*60*60)
	nowJST := utc.In(jst)
	fmt.Fprint(w, nowJST)
}

func main() {
	allowedOrigins := handlers.AllowedOrigins([]string{"http://localhost:9090"})
	allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "DELETE", "PUT"})
	allowedHeaders := handlers.AllowedHeaders([]string{"Authorization"})

	r := mux.NewRouter()
	r.HandleFunc("/public", public)
	r.HandleFunc("/private", private)
	r.HandleFunc("/nowtime", nowtime)

	log.Fatal(http.ListenAndServe(":8000", handlers.CORS(allowedOrigins, allowedMethods, allowedHeaders)(r)))
}
