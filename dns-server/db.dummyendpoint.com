$TTL    604800
@       IN      SOA     ns1.dummyendpoint.com. root.dummyendpoint.com. (
                  3       ; Serial
             604800     ; Refresh
              86400     ; Retry
            2419200     ; Expire
             604800 )   ; Negative Cache TTL
;
; name servers - NS records
     IN      NS      ns1.dummyendpoint.com.

; name servers - A records
ns1.dummyendpoint.com.          IN      A      172.20.42.5

www.dummyendpoint.com.       IN      A      127.0.0.1