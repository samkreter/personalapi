FROM golang:1.9.2 as builder
WORKDIR  /go/src/api/
COPY . /go/src/api/
RUN go test ./...
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o server .

FROM alpine:latest
RUN apk --update add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/api/server .
CMD ["./server"]