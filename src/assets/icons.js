import React from "react";

export const Logo = ({ width = "184", height = "40" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 184 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="184" height="40" fill="url(#pattern0_1_3573)" />
      <defs>
        <pattern
          id="pattern0_1_3573"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_3573"
            transform="matrix(0.0037037 0 0 0.017037 0 -0.0111111)"
          />
        </pattern>
        <image
          id="image0_1_3573"
          width="270"
          height="60"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAA8CAYAAACXdFS3AAAKomlDQ1BJQ0MgUHJvZmlsZQAASImVlwdQk9kWx+/3pTdaAgJSQm+CdAJICT303myEJEAoMQZCsyEirsCKIiIC6oqsUhRcCyBrxYKFRcFeN8iioKyLBRso7wOG4O6b9968M3Nzf3Ny7jnn3rl35v8BQEGzhcJUWA6ANEGGKNTbjR4dE0vHDQEIkIECMAEENiddyAwO9geIzc5/tw93kWjEbplO5fr3//+ryXN56RwAoGCE47npnDSEjyNDwhGKMgBAlSN+nawM4RS3I0wTIQ0i3D3FiTMsmeL4GX4/HRMe6g4AGg8AnsxmixIBINMQPz2Tk4jkIVsjbC7g8gUIcxF2TktbgczkOoQNkRghwlP5GfHf5Un8W854aU42O1HKM3uZNrwHP12Yys75P4/jf1taqni2hj4yyEkin9CpesiZ3U9Z4SdlQXxg0CzzuTM9TXGS2Cdiljnp7rGzzGV7+EnXpgb6z3IC34slzZPBCp9lXrpn2CyLVoRKayWI3JmzzBbN1RWnREj9STyWNH9uUnjULGfyIwNnOT0lzG8uxl3qF4lDpf3zBN5uc3W9pHtPS/9uv3yWdG1GUriPdO/suf55AuZczvRoaW9cnofnXEyENF6Y4SatJUwNlsbzUr2l/vTMMOnaDORCzq0Nlp5hMts3eJYBHwQANuBk8LIzppp3XyHMEfETkzLoTORV8egsAcdsAd3S3BK5vVNvdOYKjN6YfnuQivycb+MEcqXPTE5Ots75WNUAHNUDgATP+QycAZBVB+CKmCMWZc740FM/GEAEsoAGVIAG0AGGwBRYAlvgCFyBJ/AFQSAcxIBlgAOSQBoQgSywGqwHhaAYbAU7QBXYC/aDenAYHAVt4BQ4Dy6D6+AmuAMeAQkYBK/AKPgAxiEIwkEUiAqpQJqQHmQCWUIMyBnyhPyhUCgGioMSIQEkhlZDG6BiqAyqgvZBDdAv0EnoPHQV6oUeQP3QMPQW+gKjYDJMg9VhfXghzICZsB8cDi+FE+GVcC5cAG+BK+Fa+BDcCp+Hr8N3YAn8Ch5DARQJpYTSQpmiGCh3VBAqFpWAEqHWoopQFahaVDOqA9WFuoWSoEZQn9FYNBVNR5uiHdE+6Ag0B70SvRZdgq5C16Nb0RfRt9D96FH0NwwFo4YxwThgWJhoTCImC1OIqcAcwJzAXMLcwQxiPmCxWCWsAdYO64ONwSZjV2FLsLuxLdhz2F7sAHYMh8Op4ExwTrggHBuXgSvE7cIdwp3F9eEGcZ/wJLwm3hLvhY/FC/D5+Ap8I/4Mvg//Aj9OkCPoERwIQQQuIYdQSqgjdBBuEAYJ40R5ogHRiRhOTCauJ1YSm4mXiI+J70gkkjbJnhRC4pPySJWkI6QrpH7SZ7IC2ZjsTl5CFpO3kA+Sz5EfkN9RKBR9iisllpJB2UJpoFygPKV8kqHKmMmwZLgy62SqZVpl+mReyxJk9WSZsstkc2UrZI/J3pAdkSPI6cu5y7Hl1spVy52Uuyc3Jk+Vt5APkk+TL5FvlL8qP6SAU9BX8FTgKhQo7Fe4oDBARVF1qO5UDnUDtY56iTpIw9IMaCxaMq2YdpjWQxtVVFC0VoxUzFasVjytKFFCKekrsZRSlUqVjirdVfoyT30ecx5v3uZ5zfP65n1Unq/sqsxTLlJuUb6j/EWFruKpkqKyTaVN5YkqWtVYNUQ1S3WP6iXVkfm0+Y7zOfOL5h+d/1ANVjNWC1VbpbZfrVttTF1D3VtdqL5L/YL6iIaShqtGska5xhmNYU2qprMmX7Nc86zmS7oinUlPpVfSL9JHtdS0fLTEWvu0erTGtQ20I7TztVu0n+gQdRg6CTrlOp06o7qaugG6q3WbdB/qEfQYekl6O/W69D7qG+hH6W/Sb9MfMlA2YBnkGjQZPDakGLoYrjSsNbxthDViGKUY7Ta6aQwb2xgnGVcb3zCBTWxN+Ca7TXoXYBbYLxAsqF1wz5RsyjTNNG0y7TdTMvM3yzdrM3u9UHdh7MJtC7sWfjO3MU81rzN/ZKFg4WuRb9Fh8dbS2JJjWW1524pi5WW1zqrd6o21iTXPeo/1fRuqTYDNJptOm6+2drYi22bbYTtduzi7Grt7DBojmFHCuGKPsXezX2d/yv6zg61DhsNRh78cTR1THBsdhxYZLOItqls04KTtxHba5yRxpjvHOf/kLHHRcmG71Lo8c9Vx5boecH3BNGImMw8xX7uZu4ncTrh9dHdwX+N+zgPl4e1R5NHjqeAZ4Vnl+dRL2yvRq8lr1NvGe5X3OR+Mj5/PNp97LHUWh9XAGvW1813je9GP7BfmV+X3zN/YX+TfEQAH+AZsD3gcqBcoCGwLAkGsoO1BT4INglcG/xqCDQkOqQ55HmoRujq0K4watjysMexDuFt4afijCMMIcURnpGzkksiGyI9RHlFlUZLohdFroq/HqMbwY9pjcbGRsQdixxZ7Lt6xeHCJzZLCJXeXGizNXnp1meqy1GWnl8suZy8/FoeJi4prjJtgB7Fr2WPxrPia+FGOO2cn5xXXlVvOHeY58cp4LxKcEsoShhKdErcnDie5JFUkjfDd+VX8N8k+yXuTP6YEpRxMmUyNSm1Jw6fFpZ0UKAhSBBdXaKzIXtErNBEWCiUrHVbuWDkq8hMdSIfSl6a3Z9AQMdQtNhRvFPdnOmdWZ37Kisw6li2fLcjuzjHO2ZzzItcr9+dV6FWcVZ2rtVavX92/hrlm31pobfzaznU66wrWDeZ559WvJ65PWf9bvnl+Wf77DVEbOgrUC/IKBjZ6b2wqlCkUFd7b5Lhp7w/oH/g/9Gy22rxr87cibtG1YvPiiuKJEk7JtR8tfqz8cXJLwpaeUtvSPVuxWwVb725z2VZfJl+WWzawPWB7azm9vKj8/Y7lO65WWFfs3UncKd4pqfSvbN+lu2vrromqpKo71W7VLTVqNZtrPu7m7u7b47qnea/63uK9X37i/3R/n/e+1lr92or92P2Z+5/XRdZ1/cz4ueGA6oHiA18PCg5K6kPrLzbYNTQ0qjWWNsFN4qbhQ0sO3Tzscbi92bR5X4tSS/ERcER85OUvcb/cPep3tPMY41jzcb3jNSeoJ4paodac1tG2pDZJe0x770nfk50djh0nfjX79eAprVPVpxVPl54hnik4M3k29+zYOeG5kfOJ5wc6l3c+uhB94fbFkIs9l/wuXbnsdflCF7Pr7BWnK6euOlw9eY1xre267fXWbpvuE7/Z/Haix7an9Ybdjfab9jc7ehf1nulz6Tt/y+PW5dus29fvBN7pvRtx9/69Jfck97n3hx6kPnjzMPPh+KO8x5jHRU/knlQ8VXta+7vR7y0SW8npfo/+7mdhzx4NcAZe/ZH+x8RgwXPK84oXmi8ahiyHTg17Dd98ufjl4Cvhq/GRwj/l/6x5bfj6+F+uf3WPRo8OvhG9mXxb8k7l3cH31u87x4LHnn5I+zD+seiTyqf6z4zPXV+ivrwYz5rATVR+Nfra8c3v2+PJtMlJIVvEnpYCKGTACQkAvD0IACUGAOpNAIiLZzT0tEEzun+awH/iGZ09bbYANCPTlBRi5iF6JG9GwsogI8gVgHBXAFtZSces3p3W5lOGRb5Smqnk/jecvm95E+AfNqPbv+v7nzOYyjol/f8+/wtQpQU6gGSoVgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABDqADAAQAAAABAAAAPAAAAACqi0bHAAAV0UlEQVR4Ae2dP2xcxfbHN06ASBFkEQ1/xU33ExRxqKDiuoF0cQqQXoG8FvSxKWmyruiwUyC9gshrieZBYaeDypsGqMimgDYX8Ue8ioVQhL/5fT83cy6z1/fu3ru7dtZ+M9LszJw558zMmZkzZ/7s7rHGPrkoipp//vnn/N27d+dVxFl54s1jx45FimdOsESwPuHc3NzNv//+u/fggw/2ErkMKUSCBIIEZkoCx6ZZG5TFH3/80RLPC/Kx/CSuJ+LuAw88cCUokUnEGGiDBKYvgakojqeffjqWxXBZ1YunX8WUI0rkyvfff99JU+EjSCBI4L5KYCLFcQAKIy+cRIC1oEDyYgnpIIGDlcBYisOdX2zKylg82OpmpSXawiyELUwmjxAJEjhQCRyvW9qTTz65KIWxK8+h5/1yTR2irjz88MON27dvX79flQjlBgn8r0qglsXx1FNPrUtQKzMmrJ6sj4vB+pixXgnVOdISqKQ43G3JtiQRz6g0wtZlRjsmVOtoSmCk4pDSiHTFitLYl63JI4880njmmWcahL/88kvjq6++GlfSfREu6OC0Ny6DQBckECRQTQJDFYezNG6IVVSNXXWs559/vtFutxuEKA1z3333XeOjjz5qvPfeewaqEwblUUdaATdIYEwJDD0cPXXq1Ofi+39j8i4le+uttxpXr15NLY2HHnpoAA8l8tJLL6XK5Msvv2yQ/9tvvw3gDEmcVN75xx577FpfbgheyAoSCBKYQAKlisMdhC5OwLuQ9PXXX2+8++67WR4WBtbF+++/n8KwQHAvvPBCqjA+/PDDBjg1tjDcuMRSHv+R7riTMgsfQQJBAlOVwIkiblIaLcFXivImhb322msZCxTCK6+8kp5tAPz888/TOBaJ79jSfPLJJxmen1cSn9e5DC9ZV0vyAzhIIEhgAgnM5Wk5DBWMSbcvjm2IOSwNDkRxxLE2/LMNvUxN89i+nD9/Po3X+FjhZWsN/IAaJBAkUFECexSHW6mjivQToX377bcZ/enTpxtYIygSLBHcp59+muX7lkoGHBHRI7VNDnhHoIXsIIEggZoSGFAcboVu1eRRC53tiLlXX301jXIdi7WB0iCOpYHyIG4OS+WLL75ocEZSw0X6av++bLlq1CGgBgkcOQkMKA5W6P1uoW9FcJaBgjBl8vHHHzdWV+8dS3zwwQcNUyxWJxQKWxkUiK9ULL8oVJsuBaujSDIBFiQwvgSyWxVnbez76swVK8qCcwv9gE+D7Qo3JxyAvvnmm4033ngjfcfBFWyZdQGtHaCa0hkigpNSHr/JmukOwQlZQQJBAjUkkD0Ak+LY1gRbrEE7NVSsB5QGDkXAtsQUw6hCsEIquL6+z3JG32fpV8ANKEECQQIjJJBaHDLlo7/++uvfI3D3LZuzDSwRzjneeeedVHFUKYxtSwWLA1Yn9bbjv/om7RdV+AacIIEggeESOEG2blLi4Wj7n/v222+XWhmcd6Ag/BsX/0amYu0uCG+jIm5ACxIIEhgigVRxKH9pCM6BZHFuUebYumBdoDgmcLEMq2bYrkwgwUAaJOAkMMdkUjyeZYmwheHGZVL3+++/T9xOnuI7mU1anUB/xCSgsTHPq2s8P3jlLhyOWCvvNWeOvzCYhZaNsiZQHty8TOJ0ixNPQi+FEYl+JbwNmUSKR4uWMSElcVlK4ie1jG+S86RhU2ONy4Zd4FIkPESMBD8yjncc8Sy05uuvvx5ZDW5aqt62lDA7WwKvBHavahvhbUglcR15JCmFS1pEbkhJtNXYnvyq/hvootILeNLyXfmWxs4tFIziR8JxxjHRZJqWFIadcfhlcIjK73WMslB8Gi8+tnXFiqHObzle/NnUiuJtlz4yga7GF3XDtm4N0gS4+L/040hSBtu6gUvHidqeqO0ogD0OJaAFpK2MnvBW9TapuwfpntLYePzxx6Pjx4+3hdcWXeOHH35YK8A9cBD1kqLbVcGrqtNOnQrMqfHNOgT7hVvVkkDBVH01WlDXpub/WO01a8N4HlWrQ5Mm/bc9DfLI+bHkZXI6bCHzwdquukdF9UdpoATkd/i1/RKlkZH++OOPKKCW8Nege+KJJ1ayzPscUX1QarX7+IQExQCZuPpMaF56cgOStx64OuW1KFYCv6tBiAcPfL7AJk0/cR0qMkBI/Yq4KVrO2jDSI2t1WANDuFcCbiy0lZOcOHFiuc4tneZAW+cdrPLdvZwPF+QEGqduldkuoAjYMuBQGMDKJj/KYVrOlM+4/LTFiESb1KHPWxtG66yOjTqDx2hDeDglYGNB2zl+37bWAkSLsTwOZ8sHa80Zx1iOdxX2tiJvYYzFsCJRxZeiFbmNRiuwNnqimneU9l+5G2WcRJ/++bbla5WSnkkS4O7MxM6Yrsvs7ZJnuEWho1tE4UtxPavwG4X8ynsprRR6bLyE29fg7TkYf93Jc/wd8lGqSlt9UhKl51kQvHrzjeMozdSH4PxBeN/4Add2p+fvmf06O7ruKPMePK3OyDlWG5ukqauCLvUnnXeUo7pBkzqrM3WjHfCBB+3Ny9nVnzLSsoyHwa2d4rGovC7bD8OZdui1I4b3qHb75fttBU5f6E/cGRt9wzP+4hsBI4TO5OXjMUad3AbG2DF1zl1DrBNiZbDFmKY1UaV8OxytgluEIyGM3JP6dFylKd0ymFaaM9oTbittA5T96xnLz4eibwkGj9TJTF1WR52W3zCYHwreLjo8c3yWhBv7+Ll4R5NizZ8U7mDulofXUZxBtOLBSF+Th3+hk9zWMLU1wNqq42VDQp5Krys9bzAXMtDOaeCxFd4VTjOXjwJYyMHSpBv8lBEX5QsG7z3/5Fcka00cFKHf1pSl6jMgZ9HeLSkrBau8M06x7gqwqrpvDMMfN09tvyRaZMxZS19hX+nI8euqHmyPEpfOAl9m0CkjxRH9PHGF2QGow6UdA050aR8D9M5xBuogPqnc5gYoayTYpqA4DtoCOMjypJkjiSQ2sUiwttJsGUxh5AasByqPSvBL8qWDTmVw8s6kyRwrhBLA4gxYHOHaD6VW6sR/UZkrOYSdXLpyUm0pUhrQcwu1rvJ2hUP98y7WAG7ngbRd+AzqOJ/npeHN9SZtKXVSGkzCfFtTfOTMBColLshQvSLAou0VZE8M0jhaVxkbYtRVGSxwj7IoyR8TbFmedt8Q3ny+MNFxYNs3OtGew7PQCRd49pZEcBTQGXAdn1XSsjgom8uHReW15VEkaR2U/yhp4BzucquSOOKxgoO0ODjfGOM7KgPtUnv7A4AhCb00XVJ2ZCii3SIuIXYkQJ/PwEQ3/KJQPGLgjr6jaFd+wNE5/qB2ZuYaSMrrKrgiv+w8bwUSeXNsLWJL5EOV3wTm11+DC960J/Hh4Mkl+DK5CT9S/qrCBfm0jkqba7mI5VPvzInnhSyhCIpaPNoeLFF8mUGt8Fyev9KjfuFtXnQde1uheE8+cyrf77dEGfi8SwTAI7OIsEwW5I3r3OKzQhs1WS8yuX1eUh4dzlUEo5+23WKSoUhG0OyhY0sluotCZGu8aARYLbKgEtKST5+0HLxp37yCvvi1FaaOPNLUT/gNDkdTZEOY5XAaZykScFKljXSMBN3ycNmSdEgjRE1OJoENvIjJmu9scEvcFeGuWJ7bTmAp0GGpc4O665INytbg6omuZzALVXZP+LuWVhjLd+XL3Kr42PuC2O3Xqc+KG8CbRqjxsTysXSoXs73j8LuiRxn47RjIl5VwQTwjh5/hkZa8TZ5pNhMld5bQU1s5p8CSwFkfbdxL7vnsqG7LBlWfLqiMnyytMCtfeGeAq/7IMSYuR5+ncBIqm6CSE5+7oxDF+5iHg8XA2U/bgw1EkYXqwFZ3V5N+RZkZrk36AQKXgE5yZ1E4W5RfAkufLuT5Wv3mRHSzhHAmwRNaOGjWfpWGOe0cebhrXpxDwYHBqs4cGPQ+rh9ncGjA0OmZo2NZFZTn1y3Oryqi60EkeOqMga0clh4WuvLTulOueHaG4VfIS+vk4Q2MJynqrpfH6pbH97NbXqJ38uTJhmtqFkjOA/RKxx7NQFRlXfcB9L3wEw/W9OIjo0arMBqJ/I9FuCzcvE8Ew6dOyiBWJNLWisVoqHNKvKs6LJUhmrDK8kfBxXsHHM2BXXgV4XOrQkeUVqKIyIepIbU0sU87TpyHYuOec2jSDAy6EeUPKALRrrP/NhptYzBdLUkYMwBcx/rwgbg65doAwCWYxFqlqF/s5TcV75OGt2hZlebVocBZHQkYRNeJVHHCTargVcWRYkjrVxVf5f9chIvVlYPTzls52J6k5PHsHuA+AdTWnuqE8ptXETvDihmmkNWX66LtGb1kAr8Gtx+Eo5zafFM0sY/HBFfdLimvlR8fwtsSvo8+NM4CpXOOi1Jk6/SBxlkXHn6bJIO5ZCiXEZn838lBOn6HdNwti4Q3sBqW1VuCaikv8vNF21SnRL7384kLJ1Ms+TxLS959i+dD8R7IswHAIaB47wof5dHM0cWiG1lujiYkx5CALJYefaQ+eHkM8pTELQBst7aMh3imfVrVGhbdwDhxSoPxwThZk4I7g1f6nDzlLKmMSGFlp7PEHSkKeCw7ok3NC5RIi/QJXS12pVlcXv0Ai6PI2cvQorxJYVgdvCGp6yTUbkWacSfiSKtDdYjK6qC8AaVgq7k6nRXKd5yC7wDgilABA+YS6aPi1J5rWoFXZrA9V1Qnvg070rosqrvatQRcW9Ou5QuWEEcBSHmkcdJD3MA40QLDeG2K5zks1xxdT+mOFp9bGke5rNFJZ2V03Dncpig2davS5DVS35ki8Wg2ezHKvmPCr3bxi+acSZiVwFfj8w7Fw00Jnm/I8k7DtyjI5+oXuLlxFUcVU7DI2lC5pnWtCn5Ip0UG0CAg3bV0PmTgaHxsIHc/z61EsQdLT7qFywFgZHDRX9M7jw1LK0xES/JQKw4GvNrBap5OCg3yl9WmwjMp10c9TGoafpCOsy0p60uqJzc6e96SDKuL6+OWcDr+BNcikG6B1M+LyvP7tpCdyuaAuetlzivd83l6eWlUli5WTh5cOe14L0j2u+J12V6OXhOHuDIXh+g/MzfLww3iFIPvpeBRIr7jS2pl16q8DfEVDJaFPW035YFiQRn5f7Xg8y+KI+j8ZC3CE4yJ7ztO5js+wI9LkCQ3Pdgoq4O96K7olhn4TjEwYPJWxQ4879y505RVmLFXO05niX8ih1pp/NOM9JrZ5I/CJL7q5XOus6R0Km/FuSnY0thr+zj7GWcMqVzqtEk/VlUeopkXzbY8B+Frfh3Fs6f8rmD8lUdn2DgVXkt4kZRAxkNxlMI3ghc6p7CahZk5IONR53eXtMhuqR5JLptzvesqK54jQxqvQ1jHYUnYRGZbwoT/7LPPKrEoUxoQ+38ubdYGcBSIr4DKLB1wi5wau1UE92HWKT6Mgemn83G2DMLp+3CVZYPfB/txBhEPee5q8P2k+KZoso6Fnw0uNH2Ofyw69pst53dFu+gzP6xxd1OVePXnepiHXtuuzTeU17F8yYUn5lna4PsdspCobCauLQKtYWVq4nJoST/Rr/kr5pTU+GnSYslkY8HniwIQ3rpgWFsdyxPsuvzLoosMZiG8VO6m8vsGGxXKoljRuEyVcwHuWcF6qcWBhlPHdAWI5Uc6LIb1dep/z/EnSrbVMJhveRisSogSMnf58uD84xfAsDbsW7gor4o3LFWvHQcKlLC5V+9afYpCZKe2pvteL3+Y1bEhvi11ZuHggIfyV32zU7gM0n8Efu8JfAtcnPB3hHPolQey1F56QRbWrpoV0Ta5SO2LiPhOsL7aXDgJfbz9imPlaB70uHlQGShyxk5X/qY8k5T+fVb1TPtaYVdKY9nvV+VnjnEmHsvCw5KZV/yK4j0p00TKhK3IBbW3JYKe+FzMCBVRui28C1hAUrKrbkuOUkWxoTS2VM8lhT5ZYZw+ULt4K4KyvqWQx3uJQ15SmnG2PGfUymRwVnJMWFMMWAK2ZfAtCZTLOA4rA4cCMb4+H5SH4VCPiq47Ck9Cagkn8vEkpC0/XRZnpZT8GCyZE+1SlvAi0uY31aHnBEo8cBoVj64i5yTHTgpwH1pdNhRdlk8cKA1cmavit+rDD3OcicWqrLZdUTuSfFtos/yaZM5T7F4+/yDT6if/5oG6tuRTReLCFYXUkUd0I5UcVoTafkb416HXGNrVxL+l9m7LL9Ju4ew5AEVmjCnlI5tt0fwEnXhsy/PYsK2wsqNd4rMAAfwU3MAr3lKYPug7pkjmNHnQ9HEGKImwRbFtiikQULEG+HtGO9x87rnnUgVQwqYQzNnF1atXU+Xw4osvFuKgPOyAtMrtCp1RpukLC5gi0CmkTWMpxbFsikF580pH5GmV7UnbJ8SHOWjUgU1Woir4w3gdhjzMb1ZO6noY2uz3j6pceLhLW0Y5thia/Fhbtfqa2w/JCT+V8WH8pMT6vqI+4TdAlVwTQuzDiuK24vvbCvBIcw5hSuX8+fPZwWYRnyKY/faor5DyeFaufx6Sx7E0bbpfSsPqUBa6jqi1avqdV8b3KMGdckwOS5um1T9qd19trjU2kJEb6wnxabgyftlWhUKkELqaaDtVC7QJ7OOjOEyxlFkMPn4+/vPPP2egcbc7GQOZutK8G146RIMEggSmIIEBxQE/9stSHmi7kc6f5IaMMrFDTSwO27ZY/qgQelNIZbQcjuIsHMJzzWnuISghK0ggSKCuBPYoDkwTbVeGHraZwjh9+nThDwdzqMltBxPfbkLqVExnACk6Zx1FB6B27eu/9yjgf0VmY6cAHkBBAkECE0pgj+KAHxNOVgen2oUOhYHjHIJ/WCuyDGzyYxXYmUchswKgnV3A37/2NVT48ShsyPdkEr2vaBt+CIMEggSmK4GBW5U8a50QF96ycPbAgy9zKA9TFAYDx25V2HqYMrD8YSG0djhal1Z80+u8WTkQtVNpa6/OXLg9qbQVNJoQBgnMmgSGKg53JYTymJ+1ihfVh7MZ7rNnRWkU1THAggSOggQKtyrWMFZGvYG4qHRisFkNURo6mxn5yGZW6x/qFSRwmCQwVHHQEFZvnRecU7RLekZd+nJuWnfoM9rGUK0ggZmRwPEqNen3+3du3769pUNRtjZxFZqDwpGl0cUqCtuTg5J4KCdIQC+d6whBB5Vd3aB8IxrOPJp1aPcJlyvXf/3666/hsHGfBBzYBgkUSaCW4oCBLI/eqVOnruk7Fo8qeV8OTbEy5Pk9i38XNSrAggSCBPZXAkNvVUYVzRd6hLMuH4/CnVJ+Ij58Q7CjMLgggSCB+ySBiRSH1VlvLmLdaLSUXjLYNEMsDPHfCgpjmlINvIIExpfAVBSHFc9jJ309PFYaBUI4tpOy6In4mnyXL9+NzSgQBgkECUxdAlNVHH7teDymx1hsZWL5s7IYmgoj5xVkLpGS6CvFd2S+Udjj5/jC68pMPiESJDBzEvh/bwq3pIJNIngAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export const CircleFacebookIcon = ({ width = "48", height = "48" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#22223B" />
      <path
        d="M25.7115 21.686V24.2146H27.9658C28.1286 24.2146 28.2486 24.3603 28.2144 24.5231L27.8886 26.1517C27.8629 26.2717 27.7601 26.3574 27.6401 26.3574H25.7115V32.5717H23.1401V26.3574H21.6829C21.5372 26.3574 21.4258 26.246 21.4258 26.1003V24.4717C21.4258 24.326 21.5372 24.2146 21.6829 24.2146H23.1401V21.4289C23.1401 20.006 24.2886 18.8574 25.7115 18.8574H28.0258C28.1715 18.8574 28.2829 18.9688 28.2829 19.1146V21.1717C28.2829 21.3174 28.1715 21.4289 28.0258 21.4289H25.9686C25.8229 21.4289 25.7115 21.5403 25.7115 21.686Z"
        stroke="#22223B"
        stroke-width="0.857143"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M15.4258 21.283V26.5716C15.4258 30.8573 17.1401 32.5716 21.4258 32.5716H26.5686C30.8544 32.5716 32.5686 30.8573 32.5686 26.5716V21.4287C32.5686 17.143 30.8544 15.4287 26.5686 15.4287H21.4258C17.1401 15.4287 15.4258 17.143 15.4258 21.4287"
        stroke="#22223B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CircleInstagramIcon = ({ width = "48", height = "48" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#22223B" />
      <path
        d="M15.4258 21.4544V26.5716C15.4258 30.8573 17.1401 32.5716 21.4258 32.5716H26.5686C30.8544 32.5716 32.5686 30.8573 32.5686 26.5716V21.4287C32.5686 17.143 30.8544 15.4287 26.5686 15.4287H21.4258C17.1401 15.4287 15.4258 17.143 15.4258 21.4287"
        stroke="#22223B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.998 27C25.6549 27 26.998 25.6569 26.998 24C26.998 22.3431 25.6549 21 23.998 21C22.3412 21 20.998 22.3431 20.998 24C20.998 25.6569 22.3412 27 23.998 27Z"
        stroke="#22223B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.1286 20.1431H29.1518"
        stroke="#22223B"
        stroke-width="1.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CircleTikTokIcon = ({ width = "48", height = "48" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#22223B" />
      <path
        d="M32.6389 19.359C31.3982 19.3576 30.2087 18.8641 29.3314 17.9868C28.4541 17.1095 27.9606 15.92 27.9592 14.6793C27.9592 14.5838 27.9213 14.4923 27.8538 14.4248C27.7863 14.3573 27.6947 14.3193 27.5992 14.3193H23.9994C23.904 14.3193 23.8124 14.3573 23.7449 14.4248C23.6774 14.4923 23.6395 14.5838 23.6395 14.6793V26.5586C23.6394 26.9451 23.5356 27.3246 23.339 27.6573C23.1423 27.9901 22.8599 28.2639 22.5213 28.4504C22.1827 28.6368 21.8002 28.7289 21.4139 28.7172C21.0275 28.7054 20.6514 28.5902 20.3247 28.3835C19.9981 28.1768 19.7329 27.8863 19.5568 27.5422C19.3808 27.1981 19.3002 26.813 19.3237 26.4272C19.3472 26.0414 19.4738 25.6689 19.6902 25.3487C19.9067 25.0284 20.2052 24.7722 20.5545 24.6066C20.616 24.5773 20.6679 24.5311 20.7043 24.4734C20.7406 24.4158 20.7598 24.349 20.7596 24.2808V20.439C20.7597 20.3863 20.7482 20.3344 20.7259 20.2867C20.7037 20.239 20.6713 20.1967 20.6309 20.1629C20.5906 20.1291 20.5434 20.1046 20.4925 20.091C20.4417 20.0774 20.3885 20.0752 20.3367 20.0844C17.294 20.6261 15 23.4088 15 26.5586C15 28.2771 15.6827 29.9252 16.8978 31.1403C18.113 32.3555 19.7611 33.0382 21.4796 33.0382C23.1981 33.0382 24.8462 32.3555 26.0614 31.1403C27.2765 29.9252 27.9592 28.2771 27.9592 26.5586V22.3684C29.368 23.2293 30.9879 23.6828 32.6389 23.6788C32.7344 23.6788 32.8259 23.6408 32.8934 23.5733C32.961 23.5058 32.9989 23.4143 32.9989 23.3188V19.719C32.9989 19.6235 32.961 19.532 32.8934 19.4645C32.8259 19.3969 32.7344 19.359 32.6389 19.359ZM32.2789 22.9516C30.6699 22.8852 29.1159 22.3476 27.8098 21.4055C27.7559 21.3666 27.6924 21.3435 27.6262 21.3385C27.56 21.3335 27.4937 21.3469 27.4346 21.3773C27.3755 21.4077 27.326 21.4538 27.2916 21.5105C27.2571 21.5673 27.239 21.6325 27.2392 21.6989V26.5586C27.2392 28.0861 26.6324 29.5511 25.5523 30.6313C24.4721 31.7114 23.0072 32.3182 21.4796 32.3182C19.952 32.3182 18.4871 31.7114 17.4069 30.6313C16.3268 29.5511 15.72 28.0861 15.72 26.5586C15.72 23.9019 17.5486 21.5378 20.0397 20.8889V24.0666C19.6018 24.3194 19.2382 24.6831 18.9855 25.1209C18.7327 25.5588 18.5997 26.0555 18.5998 26.5611C18.5999 27.0667 18.7331 27.5634 18.986 28.0012C19.2389 28.439 19.6026 28.8025 20.0406 29.0551C20.4785 29.3078 20.9753 29.4407 21.4809 29.4405C21.9865 29.4402 22.4831 29.3069 22.9208 29.0539C23.3586 28.8008 23.722 28.437 23.9745 27.999C24.227 27.561 24.3598 27.0642 24.3594 26.5586V15.0393H27.2509C27.3401 16.3434 27.8985 17.5711 28.8228 18.4955C29.7471 19.4198 30.9748 19.9781 32.2789 20.0673V22.9516Z"
        fill="#22223B"
        stroke="#22223B"
        stroke-width="0.4"
      />
    </svg>
  );
};

export const HeroShockIcon = ({ width = "416", height = "18" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 416 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16C19.7071 13.9073 37.8527 12.384 55.9975 10.7778C58.8901 10.5217 66.5008 9.33386 69.5285 9.55556C72.5133 9.7741 73.1884 11.7058 73.3223 12.5C73.4369 13.1798 75.0553 13 76.6945 13C85.4198 13 94.6009 12.1533 102.998 11.4722C117.514 10.2949 131.923 8.96059 146.415 7.75C152.056 7.27878 156.78 6.5 162.686 6.5C165.93 6.5 165.083 6.97934 165.131 8.02778C165.167 8.80741 165.999 9.61959 168.292 9.97222C172.14 10.5639 177.943 10.2794 181.992 10.25C193.301 10.1679 204.26 9.36696 215.208 8.48611C238.175 6.63827 260.477 3.98513 283.748 2.55556C287.717 2.31179 291.865 2 295.93 2C298.343 2 295.293 4.20089 295.214 4.27778C293.148 6.29092 289.565 8.42193 289.565 10.6111C289.565 13.2032 302.94 11.8183 307.649 11.7222C336.328 11.1368 362.976 9.22573 390.31 6.41667C397.742 5.65294 406.079 4.5 414 4.5"
        stroke="#FE9264"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const BuildingsIcon = ({ width = "1440", height = "768" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1440 768"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" clip-path="url(#clip0_0_35402)">
        <path
          d="M1249.83 478.937H1213.89V811.789H1249.83V478.937Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1200.84 811.789H1213.9V476.252H1200.84V484.689"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1200.82 495.904H1171.12V605.522H1158.05V811.789H1171.12H1200.82"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M1190.75 423H1187.71V459.872H1190.75V423Z" fill="#327D99" />
        <path
          d="M1200.82 481.37V483.71V495.904H1170.85L1200.82 481.37Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1189.23 424.352V487.104"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1222.3 484.055V801.328"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1231.87 484.055V801.328"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1241.43 484.055V801.328"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 500.836V508.22"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 533.27V540.654"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 549.492V556.866"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 581.926V589.3"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 598.138V605.512"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 614.35V621.734"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 630.572V637.947"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 646.784V654.168"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 679.218V686.602"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 695.44V702.815"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 711.652V719.027"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 727.865V735.248"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1196.72 744.086V751.46"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 500.836V508.22"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 517.058V524.432"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 549.492V556.866"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 565.704V573.088"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 614.35V621.734"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 630.572V637.947"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 663.006V670.381"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 695.44V702.815"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 711.652V719.027"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 744.086V751.46"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1187.81 760.299V767.683"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 500.836V508.22"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 517.058V524.432"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 533.27V540.654"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 565.704V573.088"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 581.926V589.3"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 598.138V605.512"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 614.35V621.734"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 646.784V654.168"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 663.006V670.381"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 679.218V686.602"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 711.652V719.027"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 727.865V735.248"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 744.086V751.46"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1178.9 760.299V767.683"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1169.69 613.604C1169.69 614.49 1168.79 615.199 1167.7 615.199C1166.59 615.199 1165.71 614.481 1165.71 613.604C1165.71 612.719 1166.61 612.01 1167.7 612.01C1168.8 612.01 1169.69 612.728 1169.69 613.604Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 622.218C1169.69 623.104 1168.79 623.812 1167.7 623.812C1166.59 623.812 1165.71 623.095 1165.71 622.218C1165.71 621.333 1166.61 620.624 1167.7 620.624C1168.8 620.615 1169.69 621.333 1169.69 622.218Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 639.429C1169.69 640.314 1168.79 641.023 1167.7 641.023C1166.59 641.023 1165.71 640.305 1165.71 639.429C1165.71 638.543 1166.61 637.834 1167.7 637.834C1168.8 637.834 1169.69 638.552 1169.69 639.429Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 656.648C1169.69 657.534 1168.79 658.242 1167.7 658.242C1166.59 658.242 1165.71 657.524 1165.71 656.648C1165.71 655.762 1166.61 655.054 1167.7 655.054C1168.8 655.054 1169.69 655.772 1169.69 656.648Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 665.262C1169.69 666.148 1168.79 666.856 1167.7 666.856C1166.59 666.856 1165.71 666.139 1165.71 665.262C1165.71 664.377 1166.61 663.668 1167.7 663.668C1168.8 663.659 1169.69 664.377 1169.69 665.262Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 682.472C1169.69 683.358 1168.79 684.066 1167.7 684.066C1166.59 684.066 1165.71 683.348 1165.71 682.472C1165.71 681.586 1166.61 680.878 1167.7 680.878C1168.8 680.878 1169.69 681.596 1169.69 682.472Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 691.086C1169.69 691.972 1168.79 692.68 1167.7 692.68C1166.59 692.68 1165.71 691.962 1165.71 691.086C1165.71 690.2 1166.61 689.492 1167.7 689.492C1168.8 689.492 1169.69 690.2 1169.69 691.086Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 708.306C1169.69 709.191 1168.79 709.9 1167.7 709.9C1166.59 709.9 1165.71 709.182 1165.71 708.306C1165.71 707.42 1166.61 706.712 1167.7 706.712C1168.8 706.702 1169.69 707.42 1169.69 708.306Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 716.911C1169.69 717.796 1168.79 718.505 1167.7 718.505C1166.59 718.505 1165.71 717.787 1165.71 716.911C1165.71 716.025 1166.61 715.316 1167.7 715.316C1168.8 715.316 1169.69 716.025 1169.69 716.911Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 725.515C1169.69 726.401 1168.79 727.109 1167.7 727.109C1166.59 727.109 1165.71 726.391 1165.71 725.515C1165.71 724.629 1166.61 723.921 1167.7 723.921C1168.8 723.921 1169.69 724.639 1169.69 725.515Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 742.734C1169.69 743.62 1168.79 744.329 1167.7 744.329C1166.59 744.329 1165.71 743.611 1165.71 742.734C1165.71 741.849 1166.61 741.14 1167.7 741.14C1168.8 741.14 1169.69 741.858 1169.69 742.734Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 759.954C1169.69 760.839 1168.79 761.548 1167.7 761.548C1166.59 761.548 1165.71 760.83 1165.71 759.954C1165.71 759.068 1166.61 758.359 1167.7 758.359C1168.8 758.359 1169.69 759.068 1169.69 759.954Z"
          fill="#22223B"
        />
        <path
          d="M1169.69 768.559C1169.69 769.444 1168.79 770.153 1167.7 770.153C1166.59 770.153 1165.71 769.435 1165.71 768.559C1165.71 767.673 1166.61 766.964 1167.7 766.964C1168.8 766.964 1169.69 767.682 1169.69 768.559Z"
          fill="#22223B"
        />
        <path
          d="M1209.07 501.594C1209.07 502.48 1208.17 503.188 1207.08 503.188C1205.98 503.188 1205.09 502.471 1205.09 501.594C1205.09 500.709 1205.98 500 1207.08 500C1208.17 500 1209.07 500.709 1209.07 501.594Z"
          fill="#FE9264"
        />
        <path
          d="M1208.89 510.299C1208.89 511.184 1207.99 511.893 1206.9 511.893C1205.81 511.893 1204.91 511.175 1204.91 510.299C1204.91 509.413 1205.81 508.705 1206.9 508.705C1207.99 508.705 1208.89 509.422 1208.89 510.299Z"
          fill="#22223B"
        />
        <path
          d="M1209.07 518.813C1209.07 519.699 1208.17 520.408 1207.08 520.408C1205.98 520.408 1205.09 519.69 1205.09 518.813C1205.09 517.928 1205.98 517.219 1207.08 517.219C1208.17 517.219 1209.07 517.928 1209.07 518.813Z"
          fill="#FE9264"
        />
        <path
          d="M1206.9 529.112C1208 529.112 1208.89 528.398 1208.89 527.518C1208.89 526.638 1208 525.924 1206.9 525.924C1205.8 525.924 1204.91 526.638 1204.91 527.518C1204.91 528.398 1205.8 529.112 1206.9 529.112Z"
          fill="#22223B"
        />
        <path
          d="M1207.08 546.232C1208.18 546.232 1209.07 545.518 1209.07 544.638C1209.07 543.757 1208.18 543.043 1207.08 543.043C1205.98 543.043 1205.09 543.757 1205.09 544.638C1205.09 545.518 1205.98 546.232 1207.08 546.232Z"
          fill="#FE9264"
        />
        <path
          d="M1208.89 553.342C1208.89 554.228 1207.99 554.936 1206.9 554.936C1205.81 554.936 1204.91 554.219 1204.91 553.342C1204.91 552.457 1205.81 551.748 1206.9 551.748C1207.99 551.748 1208.89 552.466 1208.89 553.342Z"
          fill="#22223B"
        />
        <path
          d="M1209.07 570.462C1209.07 571.348 1208.17 572.056 1207.08 572.056C1205.98 572.056 1205.09 571.338 1205.09 570.462C1205.09 569.576 1205.98 568.868 1207.08 568.868C1208.17 568.868 1209.07 569.586 1209.07 570.462Z"
          fill="#FE9264"
        />
        <path
          d="M1206.9 589.374C1208 589.374 1208.89 588.661 1208.89 587.78C1208.89 586.9 1208 586.186 1206.9 586.186C1205.8 586.186 1204.91 586.9 1204.91 587.78C1204.91 588.661 1205.8 589.374 1206.9 589.374Z"
          fill="#22223B"
        />
        <path
          d="M1209.07 596.286C1209.07 597.171 1208.17 597.88 1207.08 597.88C1205.98 597.88 1205.09 597.162 1205.09 596.286C1205.09 595.4 1205.98 594.691 1207.08 594.691C1208.17 594.691 1209.07 595.409 1209.07 596.286Z"
          fill="#FE9264"
        />
        <path
          d="M1208.89 622.219C1208.89 623.105 1207.99 623.813 1206.9 623.813C1205.81 623.813 1204.91 623.096 1204.91 622.219C1204.91 621.333 1205.81 620.625 1206.9 620.625C1207.99 620.625 1208.89 621.333 1208.89 622.219Z"
          fill="#22223B"
        />
        <path
          d="M1209.07 630.724C1209.07 631.61 1208.17 632.318 1207.08 632.318C1205.98 632.318 1205.09 631.6 1205.09 630.724C1205.09 629.838 1205.98 629.13 1207.08 629.13C1208.17 629.13 1209.07 629.838 1209.07 630.724Z"
          fill="#FE9264"
        />
        <path
          d="M1208.89 639.429C1208.89 640.315 1207.99 641.023 1206.9 641.023C1205.81 641.023 1204.91 640.306 1204.91 639.429C1204.91 638.544 1205.81 637.835 1206.9 637.835C1207.99 637.835 1208.89 638.553 1208.89 639.429Z"
          fill="#22223B"
        />
        <path
          d="M1209.07 656.548C1209.07 657.434 1208.17 658.142 1207.08 658.142C1205.98 658.142 1205.09 657.425 1205.09 656.548C1205.09 655.663 1205.98 654.954 1207.08 654.954C1208.17 654.954 1209.07 655.672 1209.07 656.548Z"
          fill="#FE9264"
        />
        <path
          d="M1206.9 666.857C1208 666.857 1208.89 666.143 1208.89 665.263C1208.89 664.382 1208 663.668 1206.9 663.668C1205.8 663.668 1204.91 664.382 1204.91 665.263C1204.91 666.143 1205.8 666.857 1206.9 666.857Z"
          fill="#22223B"
        />
        <path
          d="M1209.07 690.987C1209.07 691.872 1208.17 692.581 1207.08 692.581C1205.98 692.581 1205.09 691.863 1205.09 690.987C1205.09 690.101 1205.98 689.393 1207.08 689.393C1208.17 689.393 1209.07 690.101 1209.07 690.987Z"
          fill="#FE9264"
        />
        <path
          d="M1206.9 709.9C1208 709.9 1208.89 709.186 1208.89 708.306C1208.89 707.425 1208 706.711 1206.9 706.711C1205.8 706.711 1204.91 707.425 1204.91 708.306C1204.91 709.186 1205.8 709.9 1206.9 709.9Z"
          fill="#22223B"
        />
        <path
          d="M1209.07 716.911C1209.07 717.796 1208.17 718.505 1207.08 718.505C1205.98 718.505 1205.09 717.787 1205.09 716.911C1205.09 716.025 1205.98 715.316 1207.08 715.316C1208.17 715.316 1209.07 716.025 1209.07 716.911Z"
          fill="#FE9264"
        />
        <path
          d="M1206.9 727.11C1208 727.11 1208.89 726.396 1208.89 725.516C1208.89 724.635 1208 723.921 1206.9 723.921C1205.8 723.921 1204.91 724.635 1204.91 725.516C1204.91 726.396 1205.8 727.11 1206.9 727.11Z"
          fill="#22223B"
        />
        <path
          d="M1208.98 734.13C1208.98 735.016 1208.08 735.724 1206.99 735.724C1205.9 735.724 1205 735.006 1205 734.13C1205 733.244 1205.9 732.536 1206.99 732.536C1208.08 732.536 1208.98 733.244 1208.98 734.13Z"
          fill="#FE9264"
        />
        <path
          d="M1208.89 742.735C1208.89 743.621 1207.99 744.329 1206.9 744.329C1205.81 744.329 1204.91 743.611 1204.91 742.735C1204.91 741.849 1205.81 741.141 1206.9 741.141C1207.99 741.141 1208.89 741.859 1208.89 742.735Z"
          fill="#22223B"
        />
        <path
          d="M1208.89 751.349C1208.89 752.235 1207.99 752.943 1206.9 752.943C1205.81 752.943 1204.91 752.225 1204.91 751.349C1204.91 750.463 1205.81 749.755 1206.9 749.755C1207.99 749.755 1208.89 750.463 1208.89 751.349Z"
          fill="#FE9264"
        />
        <path
          d="M1206.9 770.153C1208 770.153 1208.89 769.44 1208.89 768.559C1208.89 767.679 1208 766.965 1206.9 766.965C1205.8 766.965 1204.91 767.679 1204.91 768.559C1204.91 769.44 1205.8 770.153 1206.9 770.153Z"
          fill="#22223B"
        />
        <path
          d="M1206.9 482.554V489.929"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1262.89 811.789H1249.83V476.252H1262.89V484.689"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1262.91 495.904H1292.62V605.522H1305.67V811.789H1292.62H1262.91"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M1276.01 423H1272.98V459.872H1276.01V423Z" fill="#327D99" />
        <path
          d="M1262.92 481.37V483.71V495.904H1292.88L1262.92 481.37Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1274.5 424.352V487.104"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 501V508.384"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 533.434V540.818"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 549.492V556.866"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 565.868V573.252"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 581.926V589.3"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 598.138V605.512"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 614.514V621.898"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 630.572V637.947"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 663.17V670.545"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 695.44V702.815"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 711.816V719.191"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 744.086V751.46"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1267 760.299V767.683"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 517.058V524.432"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 533.27V540.654"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 581.926V589.3"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 614.35V621.734"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 630.572V637.947"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 646.784V654.168"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 695.604V702.979"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 711.652V719.027"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 727.865V735.248"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1275.91 760.299V767.683"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 500.836V508.22"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 517.222V524.596"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 549.656V557.03"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 565.704V573.088"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 582.09V589.464"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 598.138V605.512"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 614.35V621.734"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 646.948V654.332"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 663.006V670.381"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 679.382V686.766"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 711.652V719.027"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 728.029V735.412"
          stroke="#FE9264"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 744.086V751.461"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1284.84 760.299V767.683"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1294.04 613.604C1294.04 614.49 1294.93 615.199 1296.02 615.199C1297.13 615.199 1298.01 614.481 1298.01 613.604C1298.01 612.719 1297.12 612.01 1296.02 612.01C1294.93 612.01 1294.04 612.728 1294.04 613.604Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 622.218C1294.04 623.104 1294.93 623.812 1296.02 623.812C1297.13 623.812 1298.01 623.095 1298.01 622.218C1298.01 621.333 1297.12 620.624 1296.02 620.624C1294.93 620.615 1294.04 621.333 1294.04 622.218Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 639.429C1294.04 640.314 1294.93 641.023 1296.02 641.023C1297.13 641.023 1298.01 640.305 1298.01 639.429C1298.01 638.543 1297.12 637.834 1296.02 637.834C1294.93 637.834 1294.04 638.552 1294.04 639.429Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 648.043C1294.04 648.929 1294.93 649.637 1296.02 649.637C1297.13 649.637 1298.01 648.919 1298.01 648.043C1298.01 647.167 1297.12 646.449 1296.02 646.449C1294.93 646.449 1294.04 647.157 1294.04 648.043Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 673.867C1294.04 674.753 1294.93 675.461 1296.02 675.461C1297.13 675.461 1298.01 674.744 1298.01 673.867C1298.01 672.982 1297.12 672.273 1296.02 672.273C1294.93 672.273 1294.04 672.982 1294.04 673.867Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 691.086C1294.04 691.972 1294.93 692.68 1296.02 692.68C1297.13 692.68 1298.01 691.962 1298.01 691.086C1298.01 690.2 1297.12 689.492 1296.02 689.492C1294.93 689.492 1294.04 690.2 1294.04 691.086Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 708.306C1294.04 709.191 1294.93 709.9 1296.02 709.9C1297.13 709.9 1298.01 709.182 1298.01 708.306C1298.01 707.42 1297.12 706.712 1296.02 706.712C1294.93 706.702 1294.04 707.42 1294.04 708.306Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 716.911C1294.04 717.796 1294.93 718.505 1296.02 718.505C1297.13 718.505 1298.01 717.787 1298.01 716.911C1298.01 716.025 1297.12 715.316 1296.02 715.316C1294.93 715.316 1294.04 716.025 1294.04 716.911Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 734.13C1294.04 735.016 1294.93 735.724 1296.02 735.724C1297.13 735.724 1298.01 735.006 1298.01 734.13C1298.01 733.244 1297.12 732.536 1296.02 732.536C1294.93 732.536 1294.04 733.244 1294.04 734.13Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 742.734C1294.04 743.62 1294.93 744.329 1296.02 744.329C1297.13 744.329 1298.01 743.611 1298.01 742.734C1298.01 741.849 1297.12 741.14 1296.02 741.14C1294.93 741.14 1294.04 741.858 1294.04 742.734Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 759.954C1294.04 760.839 1294.93 761.548 1296.02 761.548C1297.13 761.548 1298.01 760.83 1298.01 759.954C1298.01 759.068 1297.12 758.359 1296.02 758.359C1294.93 758.359 1294.04 759.068 1294.04 759.954Z"
          fill="#22223B"
        />
        <path
          d="M1294.04 768.559C1294.04 769.444 1294.93 770.153 1296.02 770.153C1297.13 770.153 1298.01 769.435 1298.01 768.559C1298.01 767.673 1297.12 766.964 1296.02 766.964C1294.93 766.964 1294.04 767.682 1294.04 768.559Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 501.694C1254.84 502.579 1255.73 503.288 1256.82 503.288C1257.93 503.288 1258.81 502.57 1258.81 501.694C1258.81 500.808 1257.92 500.1 1256.82 500.1C1255.73 500.1 1254.84 500.808 1254.84 501.694Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 510.299C1254.84 511.184 1255.73 511.893 1256.82 511.893C1257.93 511.893 1258.81 511.175 1258.81 510.299C1258.81 509.413 1257.92 508.705 1256.82 508.705C1255.73 508.705 1254.84 509.422 1254.84 510.299Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 518.913C1254.84 519.798 1255.73 520.507 1256.82 520.507C1257.93 520.507 1258.81 519.789 1258.81 518.913C1258.81 518.027 1257.92 517.318 1256.82 517.318C1255.73 517.309 1254.84 518.027 1254.84 518.913Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 536.132C1254.84 537.018 1255.73 537.727 1256.82 537.727C1257.93 537.727 1258.81 537.009 1258.81 536.132C1258.81 535.247 1257.92 534.538 1256.82 534.538C1255.73 534.529 1254.84 535.247 1254.84 536.132Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 544.737C1254.84 545.623 1255.73 546.331 1256.82 546.331C1257.93 546.331 1258.81 545.614 1258.81 544.737C1258.81 543.861 1257.92 543.143 1256.82 543.143C1255.73 543.143 1254.84 543.852 1254.84 544.737Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 561.957C1254.84 562.842 1255.73 563.551 1256.82 563.551C1257.93 563.551 1258.81 562.833 1258.81 561.957C1258.81 561.071 1257.92 560.362 1256.82 560.362C1255.73 560.353 1254.84 561.071 1254.84 561.957Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 579.175C1254.84 580.061 1255.73 580.77 1256.82 580.77C1257.93 580.77 1258.81 580.052 1258.81 579.175C1258.81 578.29 1257.92 577.581 1256.82 577.581C1255.73 577.572 1254.84 578.29 1254.84 579.175Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 596.385C1254.84 597.271 1255.73 597.979 1256.82 597.979C1257.93 597.979 1258.81 597.262 1258.81 596.385C1258.81 595.5 1257.92 594.791 1256.82 594.791C1255.73 594.791 1254.84 595.509 1254.84 596.385Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 613.605C1254.84 614.491 1255.73 615.199 1256.82 615.199C1257.93 615.199 1258.81 614.481 1258.81 613.605C1258.81 612.719 1257.92 612.011 1256.82 612.011C1255.73 612.011 1254.84 612.729 1254.84 613.605Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 622.219C1254.84 623.104 1255.73 623.813 1256.82 623.813C1257.93 623.813 1258.81 623.095 1258.81 622.219C1258.81 621.333 1257.92 620.625 1256.82 620.625C1255.73 620.615 1254.84 621.333 1254.84 622.219Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 630.824C1254.84 631.709 1255.73 632.418 1256.82 632.418C1257.93 632.418 1258.81 631.7 1258.81 630.824C1258.81 629.938 1257.92 629.229 1256.82 629.229C1255.73 629.229 1254.84 629.938 1254.84 630.824Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 656.648C1254.84 657.534 1255.73 658.242 1256.82 658.242C1257.93 658.242 1258.81 657.524 1258.81 656.648C1258.81 655.762 1257.92 655.054 1256.82 655.054C1255.73 655.054 1254.84 655.772 1254.84 656.648Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 665.262C1254.84 666.148 1255.73 666.856 1256.82 666.856C1257.93 666.856 1258.81 666.139 1258.81 665.262C1258.81 664.377 1257.92 663.668 1256.82 663.668C1255.73 663.659 1254.84 664.377 1254.84 665.262Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 673.868C1254.84 674.753 1255.73 675.462 1256.82 675.462C1257.93 675.462 1258.81 674.744 1258.81 673.868C1258.81 672.982 1257.92 672.273 1256.82 672.273C1255.73 672.273 1254.84 672.982 1254.84 673.868Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 682.472C1254.84 683.358 1255.73 684.066 1256.82 684.066C1257.93 684.066 1258.81 683.348 1258.81 682.472C1258.81 681.586 1257.92 680.878 1256.82 680.878C1255.73 680.878 1254.84 681.596 1254.84 682.472Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 699.691C1254.84 700.577 1255.73 701.286 1256.82 701.286C1257.93 701.286 1258.81 700.568 1258.81 699.691C1258.81 698.806 1257.92 698.097 1256.82 698.097C1255.73 698.097 1254.84 698.815 1254.84 699.691Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 708.306C1254.84 709.191 1255.73 709.9 1256.82 709.9C1257.93 709.9 1258.81 709.182 1258.81 708.306C1258.81 707.42 1257.92 706.712 1256.82 706.712C1255.73 706.702 1254.84 707.42 1254.84 708.306Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 716.911C1254.84 717.796 1255.73 718.505 1256.82 718.505C1257.93 718.505 1258.81 717.787 1258.81 716.911C1258.81 716.025 1257.92 715.316 1256.82 715.316C1255.73 715.316 1254.84 716.025 1254.84 716.911Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 734.13C1254.84 735.016 1255.73 735.724 1256.82 735.724C1257.93 735.724 1258.81 735.006 1258.81 734.13C1258.81 733.244 1257.92 732.536 1256.82 732.536C1255.73 732.536 1254.84 733.244 1254.84 734.13Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 742.735C1254.84 743.621 1255.73 744.329 1256.82 744.329C1257.93 744.329 1258.81 743.611 1258.81 742.735C1258.81 741.849 1257.92 741.141 1256.82 741.141C1255.73 741.141 1254.84 741.859 1254.84 742.735Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 751.349C1254.84 752.235 1255.73 752.943 1256.82 752.943C1257.93 752.943 1258.81 752.226 1258.81 751.349C1258.81 750.464 1257.92 749.755 1256.82 749.755C1255.73 749.746 1254.84 750.464 1254.84 751.349Z"
          fill="#22223B"
        />
        <path
          d="M1254.84 768.559C1254.84 769.445 1255.73 770.153 1256.82 770.153C1257.93 770.153 1258.81 769.435 1258.81 768.559C1258.81 767.673 1257.92 766.965 1256.82 766.965C1255.73 766.965 1254.84 767.683 1254.84 768.559Z"
          fill="#22223B"
        />
        <path
          d="M1256.83 482.554V489.929"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M781.012 754.229H667V769.983H781.012V754.229Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M765.484 734.961C748.462 717.892 724 719.046 724 719.046C724 719.046 699.549 717.892 682.516 734.961C671.852 745.66 672.521 754.239 666.988 754.239H715.266H732.712H780.989C775.479 754.23 776.148 745.651 765.484 734.961Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M767.201 754.229H680.797V769.983H767.201V754.229Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M740.197 754.229H707.793V769.983H740.197V754.229Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask0_0_35402"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="743"
          y="559"
          width="130"
          height="265"
        >
          <path
            d="M872.155 559.567V823.698H743.43V812.927H828.997C832.689 812.927 835.69 810.521 835.69 807.56V778.772C835.69 775.811 832.689 773.405 828.997 773.405H823.308V770.149C823.308 767.188 820.308 764.781 816.616 764.781H787.758V754.395C787.758 751.926 785.672 749.851 782.85 749.225C782.348 748.455 781.657 747.167 781.244 746.38C779.37 742.864 776.537 737.551 770.77 731.772C762.259 723.247 752.119 718.756 743.43 716.394V559.567H872.155Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_0_35402)">
          <path
            d="M867.931 586.435H764.605V601.455H867.931V586.435Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M867.931 586.435H764.605V807.76H867.931V586.435Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M867.931 718.929H764.605V732.419H867.931V718.929Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M782.797 601.455V586.435"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M799.473 601.455V586.435"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M816.152 601.455V586.435"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M832.832 601.455V586.435"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M849.508 601.455V586.435"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 606.536H779.887"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 606.536H796.707"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 606.536H813.528"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 606.536H830.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 606.536H863.997"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 613.657H779.887"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 613.657H830.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 613.657H847.172"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 620.778H779.887"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 620.778H796.707"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 620.778H830.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 627.898H779.887"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 627.898H796.707"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 627.898H813.528"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 627.898H830.356"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 627.898H847.172"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 627.898H863.997"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 635.019H796.707"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 635.019H813.528"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 635.019H830.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 635.019H863.997"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 642.14H779.887"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 642.14H796.707"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 642.14H813.528"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 642.14H847.172"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 649.261H779.887"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 649.261H813.528"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 649.261H830.356"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 649.261H847.172"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 649.261H863.997"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 656.381H796.707"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 656.381H830.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 656.381H847.172"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 663.502H779.887"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 663.502H796.707"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 663.502H847.172"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 663.502H863.997"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 670.632H813.528"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 670.632H830.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 670.632H847.172"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 677.753H779.887"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 677.753H796.707"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 677.753H813.528"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 677.753H830.356"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 677.753H847.172"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 677.753H863.997"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 684.873H779.887"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 684.873H813.528"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 684.873H830.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 684.873H863.997"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 691.994H796.707"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 691.994H813.528"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 691.994H863.997"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 699.115H779.887"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 699.115H813.528"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 699.115H830.356"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 699.115H847.172"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 706.235H796.707"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 706.235H830.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.594 706.235H847.172"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 706.235H863.997"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.309 713.356H779.887"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.129 713.356H796.707"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M801.949 713.356H813.528"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.777 713.356H830.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.418 713.356H863.997"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.426 738.27H780.004"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.242 738.27H796.821"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M802.074 738.27H813.653"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.891 738.27H830.469"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.531 738.27H864.11"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.426 745.391H780.004"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M802.074 745.391H813.653"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.891 745.391H830.469"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.711 745.391H847.29"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.531 745.391H864.11"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.242 752.511H796.821"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M802.074 752.511H813.653"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.711 752.511H847.29"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.531 752.511H864.11"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M768.426 759.632H780.004"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.242 759.632H796.821"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M802.074 759.632H813.653"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M818.891 759.632H830.469"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M835.711 759.632H847.29"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.531 759.632H864.11"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M785.242 766.752H796.821"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M802.074 766.752H813.653"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M852.531 766.752H864.11"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <path
          d="M492.79 701.752L462.414 728.761H462.367V812.274H523.061V728.761H523.166L492.79 701.752Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M530.699 688.365L547.474 620.719L564.249 688.365"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M532.551 688.365L547.477 671.892L562.404 688.365"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M459.264 705.072H456.055L454.66 709.09V718.152H460.624V709.09H460.659L459.264 705.072Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M529.4 675.285H526.192L524.797 679.313V688.365H530.76V679.313H530.795L529.4 675.285Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M568.693 675.285H565.485L564.09 679.313V688.365H570.053V679.313H570.088L568.693 675.285Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M462.369 718.151H452.906V812.274H462.369V718.151Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M532.525 688.365H523.062V812.275H532.525V688.365Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M571.806 688.365H562.344V812.275H571.806V688.365Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M552.835 687.451C552.835 689.828 550.441 691.749 547.476 691.749C544.512 691.749 542.117 689.828 542.117 687.451C542.117 685.074 544.512 683.153 547.476 683.153C550.441 683.153 552.835 685.083 552.835 687.451Z"
          fill="#FE9264"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M510.777 744.171C510.684 752.133 502.558 758.538 492.63 758.463C482.703 758.388 474.716 751.872 474.809 743.91C474.902 735.939 483.028 729.544 492.968 729.618C502.884 729.684 510.87 736.2 510.777 744.171Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M473.541 763.712C471.856 763.712 470.484 764.654 470.484 765.819H470.438V774.377H476.587V765.819C476.599 764.654 475.227 763.712 473.541 763.712Z"
          fill="#FE9264"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M483.795 763.712C482.11 763.712 480.738 764.654 480.738 765.819H480.691V774.377H486.841V765.819C486.853 764.654 485.481 763.712 483.795 763.712Z"
          fill="#FE9264"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M501.686 763.712C500 763.712 498.628 764.654 498.628 765.819H498.582V774.377H504.732V765.819C504.743 764.654 503.371 763.712 501.686 763.712Z"
          fill="#FE9264"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M511.948 763.712C510.262 763.712 508.89 764.654 508.89 765.819H508.844V774.377H514.993V765.819C514.993 764.654 513.633 763.712 511.948 763.712Z"
          fill="#FE9264"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M542.287 763.712C540.602 763.712 539.23 764.654 539.23 765.819H539.184V774.377H545.333V765.819C545.333 764.654 543.973 763.712 542.287 763.712Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M552.545 763.712C550.86 763.712 549.488 764.654 549.488 765.819H549.441V774.377H555.591V765.819C555.603 764.654 554.231 763.712 552.545 763.712Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M433.002 763.712C431.317 763.712 429.945 764.654 429.945 765.819H429.898V774.377H436.048V765.819C436.06 764.654 434.688 763.712 433.002 763.712Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M443.268 763.712C441.582 763.712 440.21 764.654 440.21 765.819H440.164V774.377H446.314V765.819C446.314 764.654 444.953 763.712 443.268 763.712Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M554.345 706.703C554.089 703.161 547.393 698.387 547.393 698.387C547.393 698.387 540.697 703.151 540.441 706.703H540.418V718.152H554.368V706.703H554.345Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M452.908 750.315H423.184V760.029H452.908V750.315Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M547.477 620.719V605.28"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M492.781 691.75V695.348V701.753"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M488.141 695.348H497.429"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M420.053 736.48H416.844L415.449 740.507V746.772H421.413V740.507H421.448L420.053 736.48Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M423.17 746.772H413.707V812.274H423.17V746.772Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask1_0_35402"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="295"
          y="480"
          width="125"
          height="360"
        >
          <path
            d="M385.384 765.532C385.466 765.021 385.396 764.502 385.164 763.991L383.769 760.964C382.932 759.156 380.176 757.888 377.049 757.888H373.841C370.714 757.888 367.959 759.156 367.122 760.964L365.715 764.019C365.552 764.376 365.471 764.748 365.471 765.119V767.053C364.39 767.788 363.727 768.762 363.727 769.827V819.056C363.727 821.375 366.854 823.26 370.702 823.26H419.19V839.571H295.082V480H419.19V734.675C418.295 734.423 417.295 734.283 416.26 734.283H413.052C409.925 734.283 407.17 735.551 406.333 737.359L404.938 740.379C404.763 740.75 404.682 741.128 404.682 741.507V745.529C403.589 746.271 402.926 747.252 402.926 748.317V768.286H386.663C386.361 767.823 385.931 767.403 385.384 767.032V765.532Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_0_35402)">
          <path
            d="M403.945 787.814H318.758L319.014 784.304L319.107 783.126L319.339 779.917L319.537 777.122L319.792 773.654L320.002 770.858L320.246 767.39L320.455 764.601L320.711 761.133V761.126L320.908 758.337L321.164 754.869V754.862L321.362 752.073L321.618 748.605L321.815 745.809L322.071 742.341L322.257 739.749L322.269 739.553L322.28 739.377L322.338 738.733L322.42 737.598L322.524 736.147V736.077L322.571 735.426L322.722 733.289L322.978 729.82L323.187 727.025L323.431 723.557V723.549L323.64 720.761L323.896 717.3V717.286L324.105 714.504L324.349 711.036V711.022L324.559 708.24L324.814 704.772L325.012 701.976L325.268 698.508V698.501L325.361 697.191L325.465 695.719L325.547 694.619L325.628 693.582L325.651 693.33V693.323L325.663 693.232L325.721 692.251V692.237L325.791 691.319L325.919 689.455L326.175 685.987V685.973L326.384 683.192L326.628 679.723V679.709L326.837 676.928L327.081 673.459V673.445L327.291 670.671L327.546 667.203V667.182L327.744 664.407L328 660.939V660.925L328.209 658.143L328.372 655.838L328.383 655.642L328.453 654.675V654.661L328.604 652.636L328.627 652.335V652.293L328.639 652.285V652.236L328.662 651.886L328.906 648.418L329.116 645.622L329.371 642.154V642.133L329.569 639.358L329.825 635.89L330.034 633.094L330.278 629.626V629.605L330.487 626.838L330.732 623.369V623.341L330.941 620.574L331.138 617.764L331.197 617.105V617.084L331.29 615.697L331.336 615.067L331.382 614.457L331.394 614.31L331.417 613.981L331.557 612.089L331.65 610.842V610.821L331.847 608.046L332.103 604.578L332.301 601.789L332.557 598.321V598.293L332.766 595.525L333.01 592.057V592.029L333.219 589.261L333.463 585.793V585.765L333.673 583.004L333.824 581.001L333.893 579.943L333.975 578.772L333.986 578.695L334.056 577.686L334.219 575.486H388.496L388.658 577.672L388.728 578.695L388.74 578.772L388.821 579.936L388.891 580.979L389.042 583.004L389.24 585.765V585.793L389.495 589.261L389.705 592.029V592.057L389.949 595.525L390.158 598.293V598.321L390.414 601.789L390.612 604.557V604.578L390.867 608.046L391.077 610.821V610.842L391.158 612.11L391.297 613.987L391.321 614.31L391.332 614.443L391.379 615.06L391.425 615.718L391.53 617.084V617.105L391.576 617.75L391.774 620.574L391.983 623.341V623.369L392.239 626.838L392.437 629.605V629.626L392.692 633.094L392.89 635.869V635.89L393.146 639.358L393.343 642.133V642.154L393.599 645.622L393.808 648.418L394.064 651.886L394.087 652.25V652.321L394.111 652.629L394.262 654.661V654.675L394.331 655.628L394.343 655.859L394.517 658.143L394.715 660.925V660.939L394.971 664.407L395.168 667.182V667.203L395.424 670.671L395.622 673.445V673.459L395.878 676.928L396.075 679.709V679.723L396.331 683.192L396.54 685.973V685.987L396.784 689.455L396.924 691.298L396.994 692.237V692.251L397.063 693.239V693.316L397.087 693.596L397.168 694.605L397.238 695.719L397.354 697.205L397.447 698.501V698.508L397.703 701.976L397.9 704.772L398.156 708.24L398.354 711.022V711.036L398.609 714.504L398.819 717.286V717.3L399.063 720.761L399.272 723.549V723.557L399.516 727.025L399.725 729.813V729.82L399.981 733.289L400.132 735.419L400.179 736.077V736.084L400.19 736.161L400.295 737.605L400.376 738.719L400.423 739.37L400.435 739.553L400.458 739.77L400.644 742.341L400.9 745.809L401.097 748.605L401.353 752.073L401.55 754.862V754.869L401.806 758.337L402.004 761.126V761.133L402.26 764.601L402.457 767.39L402.713 770.858L402.922 773.654L403.166 777.122L403.376 779.917L403.608 783.126L403.69 784.318L403.945 787.814Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M403.946 787.813L361.353 762.548L322.281 739.377"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M318.758 787.814L361.352 762.548L400.423 739.37"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M400.3 737.605L361.356 714.504L325.656 693.33V693.323"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M397.065 693.316L361.354 714.504L322.422 737.598"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M328.602 652.636L332.019 654.661L342.575 660.925L353.13 667.181L361.349 672.058L363.686 673.445L374.253 679.709L384.808 685.973L395.375 692.237L397.061 693.239"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M394.112 652.629L390.682 654.661L380.127 660.925L361.353 672.058L348.461 679.709L337.894 685.973L327.338 692.237L325.664 693.232"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M394.087 652.291L376.952 642.132L361.351 632.876L355.841 629.604L345.286 623.34L334.742 617.083L331.336 615.065"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M328.625 652.292L328.637 652.285L345.748 642.133L356.304 635.869L361.349 632.877L366.859 629.605L377.415 623.341L387.959 617.084L391.376 615.059"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M391.294 613.987L361.349 596.226L333.891 579.942"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M331.414 613.981L361.348 596.226L388.806 579.936H388.818"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M345.52 575.122V511.845"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M377.359 575.122V511.845"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M388.822 579.936H334.371"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M353.188 767.39H369.509H402.454"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M374.691 761.125H395.616H401.998"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M320.707 761.125H358.953"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M382.312 754.862H401.552"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M321.16 754.862H334.761"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M356.492 748.605H378.254"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M321.617 748.605H337.846"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M382.992 742.341H395.408H400.639"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M327.281 742.341H356.495"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M322.52 736.077H324.972H397.71H400.174"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M387.156 729.813H399.723"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M349.652 729.813H393.141"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M376.602 723.549H399.27"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M323.426 723.549H346.094"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M370.93 717.286H398.818"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M323.891 717.286H356.661"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M382.992 711.021H398.349"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M324.344 711.021H347.779H355.475"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M344.922 704.765H387.155"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M325.27 698.501H334.372H388.323H397.449"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M372.703 692.237H395.372H396.988"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M325.719 692.237H327.335H340.064"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M384.809 685.973H396.538"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M326.168 685.973H337.886H361.345"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M326.621 679.709H348.453H349.36H374.248H396.068"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M363.688 673.445H395.621"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M327.074 673.445H344.918"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M384.809 667.182H395.166"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M327.543 667.182H353.129H368.358"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M354.898 660.925H374.696H380.124H394.714"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M327.996 660.925H342.574"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M390.672 654.661H394.252"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M328.453 654.661H332.022H351.935H375.883"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M346.691 648.397H363.013H379.439"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M376.953 642.133H393.344"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M329.371 642.133H345.751H365.397"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M379.434 635.869H392.884"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M356.304 635.869H341.645"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M330.277 629.605H355.841H366.861H392.436"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M377.414 623.341H391.98"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M330.73 623.341H345.285H352.167"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M387.957 617.084H391.526"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M331.191 617.084H334.737H368.356"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M374.344 610.821H391.072"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M331.645 610.821H343.63"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M347.309 604.557H375.394H390.611"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M375.879 598.292H390.154"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M332.555 598.292H353.514"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M368.426 592.029H389.699"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M333.008 592.029H354.27"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M333.457 585.765H343.71H378.98H389.233"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <mask
          id="mask2_0_35402"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="-28"
          y="277"
          width="251"
          height="563"
        >
          <path
            d="M189.923 700.052V817.914C189.923 820.363 193.051 822.352 196.898 822.352H222.159V839.571H-27.1836V277.565H222.159V685.059C221.462 685.747 221.067 686.568 221.067 687.441V689.415L195.201 693.602C192.097 694.105 189.935 695.873 189.935 697.907V700.022L189.923 700.052Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask2_0_35402)">
          <path
            d="M213.325 582.692H63.457V590.687H213.325V582.692Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M145.603 404.511H63.4727V582.692H145.603V404.511Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M213.328 652.255H25.0156V660.251H213.328V652.255Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M213.328 493.845H145.602"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M145.587 404.821H63.457V412.817H145.587V404.821Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M85.0469 335.346V404.503"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M113.586 335.346V404.503"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M145.601 660.251H25.0156V817.914H145.601V660.251Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M145.599 582.692H63.457V652.248H145.599V582.692Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M145.602 648.298V664.097"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M110.465 817.914H213.322V654.393"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M213.328 485.842H145.602V582.692H213.328V485.842Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 667.943H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M130.521 676.967H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 685.991H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 695.015H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 704.038H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.637 713.062H117.863"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 722.086H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M132.706 731.109H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.634 740.133H115.094"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M115.095 749.156H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.631 749.156H126.762"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M129.73 758.18H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 767.204H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3576 667.943H76.9094H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3576 676.967H74.131H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M76.9094 685.991H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3597 685.991H85.3047"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3576 695.015H91.3243H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3576 704.038H88.7784H76.9094H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M76.1189 713.062H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3567 713.062H89.7656"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3576 722.086H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3576 731.109H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3576 740.133H82.4893H76.9094H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M78.688 749.156H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3603 749.157H87.793"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3576 758.18H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M76.9094 767.204H67.6211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3583 767.204H89.9648"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0647 667.943H26.3398"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0647 676.967H26.3398"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.9777 685.991H26.3398"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0636 685.991H41.1953"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0647 695.015H26.3398"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0647 704.038H26.3398"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0636 713.062H32.9766"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0636 722.085H41.1953"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44.2538 731.109H26.3398"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0647 740.133H26.3398"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44.6491 749.156H26.3398"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0709 758.18H38.7266"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M56.0647 767.204H26.3398"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M213.325 590.688H63.457V652.248H213.325V590.688Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3528 598.616H81.5312"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3555 607.64H79.8717H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3555 616.664H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M91.3454 625.68H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3535 634.704H82.4853H80.6602"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M97.3555 643.728H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M120.233 598.158H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 598.158H132.113"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 607.182H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M117.268 616.198H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.636 616.198H128.348"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M123.778 625.221H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 625.221H132.113"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M130.521 634.245H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M138.635 643.269H108.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.448 421.108H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.448 430.132H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M83.8242 439.155H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.445 439.155H96.0977"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M92.1359 448.172H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.448 457.195H83.8242"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M90.9502 466.219H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.448 475.243H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.448 484.267H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M79.0812 493.291H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.445 493.291H93.1211"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.448 502.314H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M82.0455 511.338H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.453 511.338H97.0938"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.448 520.362H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M88.974 529.385H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.453 529.385H97.0938"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.448 538.409H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M89.1716 547.433H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.449 556.457H85.0117"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M81.534 565.48H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.449 565.48H95.1133"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M101.448 574.504H91.5431H71.7109"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M164.167 502.314H156.262"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M185.997 502.314H176.395"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M173.862 511.338H156.262"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M185.998 520.362H156.262"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M164.167 529.386H156.262"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M185.997 529.386H177.418"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M185.998 538.409H177.814H156.262"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M185.997 547.433H166.793"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M174.652 556.457H156.262"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M185.998 565.48H156.262"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M166.794 574.504H156.262"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M185.998 574.504H180.395"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <mask
          id="mask3_0_35402"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="178"
          y="531"
          width="151"
          height="306"
        >
          <path
            d="M302.206 800.253C302.195 800.528 302.206 800.828 302.218 801.096L302.23 801.356C302.23 801.477 302.23 801.607 302.241 801.777C302.299 802.418 302.369 803.01 302.485 803.61C303.276 807.665 305.636 811.136 309.472 813.909C313.843 817.064 319.958 819.165 327.712 820.154C327.909 820.178 328.095 820.195 328.304 820.211V836.001H178.715V531H328.304V769.533C317.307 775.072 307.786 783.198 303.183 795.087C303.09 795.298 302.323 797.236 302.218 799.985L302.206 800.253Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask3_0_35402)">
          <path
            d="M318.41 686.716H196.883V815.361H318.41V686.716Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M228.026 678.249L196.895 683.78V686.716H228.026H229.967"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M287.289 678.339L318.42 683.781V686.716H287.289H284.836"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M239.858 670.326V666.498H230.128V672.305H228.023V686.716H239.858V672.305"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M275.453 666.498H285.183V672.305H287.287V686.716H275.453V672.305"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M239.859 666.498V605.78H275.455V666.498V670.05V672.305V686.716H239.859V672.305V670.326"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M265.274 629.931C265.274 633.086 261.6 635.649 257.078 635.649C252.545 635.649 248.883 633.086 248.883 629.931C248.883 626.768 252.556 624.214 257.078 624.214C261.6 624.214 265.274 626.777 265.274 629.931Z"
            fill="#FE9264"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M262.413 583.746V578.71H252.893V583.746H248.777V598.644H266.529V583.746H262.413Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M270.469 598.644H244.848V605.781H270.469V598.644Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M250.219 610.946V617.029"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M257.656 610.946V617.029"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M265.102 610.946V617.029"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M257.656 578.71V563.22"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M205.722 692.822C205.722 693.593 204.827 694.209 203.734 694.209C202.63 694.209 201.746 693.585 201.746 692.822C201.746 692.052 202.641 691.436 203.734 691.436C204.827 691.436 205.722 692.052 205.722 692.822Z"
            fill="#22223B"
          />
          <path
            d="M211.945 694.209C213.043 694.209 213.933 693.588 213.933 692.822C213.933 692.056 213.043 691.436 211.945 691.436C210.847 691.436 209.957 692.056 209.957 692.822C209.957 693.588 210.847 694.209 211.945 694.209Z"
            fill="#22223B"
          />
          <path
            d="M228.355 694.217C229.453 694.217 230.343 693.596 230.343 692.83C230.343 692.064 229.453 691.443 228.355 691.443C227.257 691.443 226.367 692.064 226.367 692.83C226.367 693.596 227.257 694.217 228.355 694.217Z"
            fill="#22223B"
          />
          <path
            d="M238.558 692.839C238.558 693.609 237.663 694.225 236.57 694.225C235.466 694.225 234.582 693.601 234.582 692.839C234.582 692.068 235.477 691.452 236.57 691.452C237.663 691.444 238.558 692.068 238.558 692.839Z"
            fill="#22223B"
          />
          <path
            d="M205.722 700.73C205.722 701.5 204.827 702.116 203.734 702.116C202.63 702.116 201.746 701.492 201.746 700.73C201.746 699.959 202.641 699.343 203.734 699.343C204.827 699.335 205.722 699.959 205.722 700.73Z"
            fill="#22223B"
          />
          <path
            d="M213.933 700.73C213.933 701.5 213.038 702.116 211.945 702.116C210.841 702.116 209.957 701.492 209.957 700.73C209.957 699.959 210.852 699.343 211.945 699.343C213.038 699.343 213.933 699.967 213.933 700.73Z"
            fill="#22223B"
          />
          <path
            d="M230.343 700.737C230.343 701.507 229.448 702.124 228.355 702.124C227.262 702.124 226.367 701.499 226.367 700.737C226.367 699.966 227.262 699.35 228.355 699.35C229.448 699.35 230.343 699.975 230.343 700.737Z"
            fill="#22223B"
          />
          <path
            d="M238.558 700.746C238.558 701.516 237.663 702.133 236.57 702.133C235.466 702.133 234.582 701.508 234.582 700.746C234.582 699.975 235.477 699.359 236.57 699.359C237.663 699.351 238.558 699.975 238.558 700.746Z"
            fill="#22223B"
          />
          <path
            d="M222.14 708.644C222.14 709.415 221.245 710.031 220.152 710.031C219.048 710.031 218.164 709.406 218.164 708.644C218.164 707.874 219.059 707.257 220.152 707.257C221.245 707.249 222.14 707.874 222.14 708.644Z"
            fill="#22223B"
          />
          <path
            d="M228.355 710.031C229.453 710.031 230.343 709.41 230.343 708.644C230.343 707.878 229.453 707.257 228.355 707.257C227.257 707.257 226.367 707.878 226.367 708.644C226.367 709.41 227.257 710.031 228.355 710.031Z"
            fill="#22223B"
          />
          <path
            d="M205.722 716.544C205.722 717.314 204.827 717.93 203.734 717.93C202.63 717.93 201.746 717.306 201.746 716.544C201.746 715.773 202.641 715.157 203.734 715.157C204.827 715.149 205.722 715.773 205.722 716.544Z"
            fill="#22223B"
          />
          <path
            d="M213.933 716.543C213.933 717.314 213.038 717.93 211.945 717.93C210.852 717.93 209.957 717.306 209.957 716.543C209.957 715.773 210.852 715.157 211.945 715.157C213.038 715.157 213.933 715.773 213.933 716.543Z"
            fill="#22223B"
          />
          <path
            d="M230.343 716.551C230.343 717.322 229.448 717.938 228.355 717.938C227.251 717.938 226.367 717.314 226.367 716.551C226.367 715.781 227.262 715.165 228.355 715.165C229.448 715.165 230.343 715.781 230.343 716.551Z"
            fill="#22223B"
          />
          <path
            d="M238.558 716.551C238.558 717.322 237.663 717.938 236.57 717.938C235.466 717.938 234.582 717.314 234.582 716.551C234.582 715.781 235.477 715.165 236.57 715.165C237.663 715.165 238.558 715.789 238.558 716.551Z"
            fill="#22223B"
          />
          <path
            d="M205.722 724.442C205.722 725.213 204.827 725.829 203.734 725.829C202.63 725.829 201.746 725.205 201.746 724.442C201.746 723.672 202.641 723.056 203.734 723.056C204.827 723.056 205.722 723.68 205.722 724.442Z"
            fill="#22223B"
          />
          <path
            d="M222.14 724.45C222.14 725.221 221.245 725.837 220.152 725.837C219.048 725.837 218.164 725.213 218.164 724.45C218.164 723.68 219.059 723.063 220.152 723.063C221.245 723.063 222.14 723.688 222.14 724.45Z"
            fill="#22223B"
          />
          <path
            d="M228.355 725.845C229.453 725.845 230.343 725.224 230.343 724.459C230.343 723.693 229.453 723.072 228.355 723.072C227.257 723.072 226.367 723.693 226.367 724.459C226.367 725.224 227.257 725.845 228.355 725.845Z"
            fill="#22223B"
          />
          <path
            d="M238.558 724.459C238.558 725.229 237.663 725.845 236.57 725.845C235.466 725.845 234.582 725.221 234.582 724.459C234.582 723.696 235.477 723.072 236.57 723.072C237.663 723.072 238.558 723.696 238.558 724.459Z"
            fill="#22223B"
          />
          <path
            d="M205.722 732.349C205.722 733.12 204.827 733.736 203.734 733.736C202.63 733.736 201.746 733.112 201.746 732.349C201.746 731.579 202.641 730.962 203.734 730.962C204.827 730.962 205.722 731.587 205.722 732.349Z"
            fill="#22223B"
          />
          <path
            d="M213.933 732.357C213.933 733.128 213.038 733.744 211.945 733.744C210.841 733.744 209.957 733.12 209.957 732.357C209.957 731.587 210.852 730.971 211.945 730.971C213.038 730.971 213.933 731.587 213.933 732.357Z"
            fill="#22223B"
          />
          <path
            d="M238.558 732.365C238.558 733.136 237.663 733.752 236.57 733.752C235.466 733.752 234.582 733.128 234.582 732.365C234.582 731.595 235.477 730.979 236.57 730.979C237.663 730.979 238.558 731.603 238.558 732.365Z"
            fill="#22223B"
          />
          <path
            d="M205.722 740.256C205.722 741.027 204.827 741.643 203.734 741.643C202.63 741.643 201.746 741.019 201.746 740.256C201.746 739.486 202.641 738.87 203.734 738.87C204.827 738.87 205.722 739.494 205.722 740.256Z"
            fill="#22223B"
          />
          <path
            d="M211.945 741.651C213.043 741.651 213.933 741.03 213.933 740.264C213.933 739.498 213.043 738.877 211.945 738.877C210.847 738.877 209.957 739.498 209.957 740.264C209.957 741.03 210.847 741.651 211.945 741.651Z"
            fill="#22223B"
          />
          <path
            d="M228.355 741.659C229.453 741.659 230.343 741.038 230.343 740.272C230.343 739.506 229.453 738.885 228.355 738.885C227.257 738.885 226.367 739.506 226.367 740.272C226.367 741.038 227.257 741.659 228.355 741.659Z"
            fill="#22223B"
          />
          <path
            d="M238.558 740.272C238.558 741.042 237.663 741.659 236.57 741.659C235.466 741.659 234.582 741.034 234.582 740.272C234.582 739.502 235.477 738.885 236.57 738.885C237.663 738.885 238.558 739.51 238.558 740.272Z"
            fill="#22223B"
          />
          <path
            d="M205.722 748.164C205.722 748.934 204.827 749.55 203.734 749.55C202.63 749.55 201.746 748.926 201.746 748.164C201.746 747.393 202.641 746.777 203.734 746.777C204.827 746.777 205.722 747.401 205.722 748.164Z"
            fill="#22223B"
          />
          <path
            d="M222.14 748.171C222.14 748.942 221.245 749.558 220.152 749.558C219.048 749.558 218.164 748.934 218.164 748.171C218.164 747.401 219.059 746.785 220.152 746.785C221.245 746.785 222.14 747.409 222.14 748.171Z"
            fill="#22223B"
          />
          <path
            d="M230.343 748.179C230.343 748.95 229.448 749.566 228.355 749.566C227.251 749.566 226.367 748.942 226.367 748.179C226.367 747.409 227.262 746.793 228.355 746.793C229.448 746.784 230.343 747.409 230.343 748.179Z"
            fill="#22223B"
          />
          <path
            d="M238.558 748.179C238.558 748.95 237.663 749.566 236.57 749.566C235.466 749.566 234.582 748.942 234.582 748.179C234.582 747.409 235.477 746.792 236.57 746.792C237.663 746.792 238.558 747.409 238.558 748.179Z"
            fill="#22223B"
          />
          <path
            d="M205.722 756.071C205.722 756.841 204.827 757.458 203.734 757.458C202.63 757.458 201.746 756.833 201.746 756.071C201.746 755.309 202.641 754.684 203.734 754.684C204.827 754.684 205.722 755.3 205.722 756.071Z"
            fill="#22223B"
          />
          <path
            d="M211.945 757.465C213.043 757.465 213.933 756.844 213.933 756.078C213.933 755.312 213.043 754.691 211.945 754.691C210.847 754.691 209.957 755.312 209.957 756.078C209.957 756.844 210.847 757.465 211.945 757.465Z"
            fill="#22223B"
          />
          <path
            d="M222.14 756.078C222.14 756.849 221.245 757.465 220.152 757.465C219.048 757.465 218.164 756.84 218.164 756.078C218.164 755.308 219.059 754.691 220.152 754.691C221.245 754.691 222.14 755.308 222.14 756.078Z"
            fill="#22223B"
          />
          <path
            d="M238.558 756.086C238.558 756.856 237.663 757.473 236.57 757.473C235.466 757.473 234.582 756.848 234.582 756.086C234.582 755.316 235.477 754.699 236.57 754.699C237.663 754.699 238.558 755.316 238.558 756.086Z"
            fill="#22223B"
          />
          <path
            d="M205.722 763.978C205.722 764.748 204.827 765.364 203.734 765.364C202.63 765.364 201.746 764.74 201.746 763.978C201.746 763.207 202.641 762.591 203.734 762.591C204.827 762.591 205.722 763.207 205.722 763.978Z"
            fill="#22223B"
          />
          <path
            d="M230.343 763.985C230.343 764.756 229.448 765.372 228.355 765.372C227.251 765.372 226.367 764.748 226.367 763.985C226.367 763.215 227.262 762.599 228.355 762.599C229.448 762.599 230.343 763.223 230.343 763.985Z"
            fill="#22223B"
          />
          <path
            d="M238.558 763.993C238.558 764.764 237.663 765.38 236.57 765.38C235.466 765.38 234.582 764.756 234.582 763.993C234.582 763.223 235.477 762.606 236.57 762.606C237.663 762.606 238.558 763.223 238.558 763.993Z"
            fill="#22223B"
          />
          <path
            d="M259.062 641.317C259.062 642.087 258.167 642.704 257.074 642.704C255.969 642.704 255.086 642.079 255.086 641.317C255.086 640.547 255.981 639.93 257.074 639.93C258.178 639.93 259.062 640.555 259.062 641.317Z"
            fill="#22223B"
          />
          <path
            d="M267.276 641.326C267.276 642.096 266.381 642.713 265.289 642.713C264.184 642.713 263.301 642.088 263.301 641.326C263.301 640.555 264.196 639.939 265.289 639.939C266.393 639.931 267.276 640.555 267.276 641.326Z"
            fill="#22223B"
          />
          <path
            d="M250.859 649.224C250.859 649.995 249.963 650.611 248.871 650.611C247.766 650.611 246.883 649.987 246.883 649.224C246.883 648.454 247.778 647.837 248.871 647.837C249.975 647.829 250.859 648.454 250.859 649.224Z"
            fill="#22223B"
          />
          <path
            d="M259.062 649.224C259.062 649.995 258.167 650.611 257.074 650.611C255.969 650.611 255.086 649.987 255.086 649.224C255.086 648.454 255.981 647.837 257.074 647.837C258.178 647.837 259.062 648.462 259.062 649.224Z"
            fill="#22223B"
          />
          <path
            d="M250.859 657.131C250.859 657.902 249.963 658.518 248.871 658.518C247.778 658.518 246.883 657.894 246.883 657.131C246.883 656.361 247.778 655.745 248.871 655.745C249.963 655.745 250.859 656.361 250.859 657.131Z"
            fill="#22223B"
          />
          <path
            d="M267.276 657.139C267.276 657.91 266.381 658.526 265.289 658.526C264.184 658.526 263.301 657.902 263.301 657.139C263.301 656.369 264.196 655.753 265.289 655.753C266.393 655.744 267.276 656.369 267.276 657.139Z"
            fill="#22223B"
          />
          <path
            d="M265.289 666.425C266.387 666.425 267.276 665.805 267.276 665.039C267.276 664.273 266.387 663.652 265.289 663.652C264.191 663.652 263.301 664.273 263.301 665.039C263.301 665.805 264.191 666.425 265.289 666.425Z"
            fill="#22223B"
          />
          <path
            d="M250.859 672.937C250.859 673.708 249.963 674.324 248.871 674.324C247.766 674.324 246.883 673.699 246.883 672.937C246.883 672.167 247.778 671.55 248.871 671.55C249.975 671.55 250.859 672.175 250.859 672.937Z"
            fill="#22223B"
          />
          <path
            d="M259.062 672.945C259.062 673.716 258.167 674.332 257.074 674.332C255.969 674.332 255.086 673.708 255.086 672.945C255.086 672.175 255.981 671.559 257.074 671.559C258.178 671.559 259.062 672.175 259.062 672.945Z"
            fill="#22223B"
          />
          <path
            d="M267.276 672.945C267.276 673.716 266.381 674.332 265.289 674.332C264.184 674.332 263.301 673.708 263.301 672.945C263.301 672.175 264.196 671.559 265.289 671.559C266.393 671.559 267.276 672.183 267.276 672.945Z"
            fill="#22223B"
          />
          <path
            d="M248.871 682.231C249.969 682.231 250.859 681.61 250.859 680.844C250.859 680.078 249.969 679.458 248.871 679.458C247.773 679.458 246.883 680.078 246.883 680.844C246.883 681.61 247.773 682.231 248.871 682.231Z"
            fill="#22223B"
          />
          <path
            d="M259.062 680.852C259.062 681.623 258.167 682.239 257.074 682.239C255.969 682.239 255.086 681.615 255.086 680.852C255.086 680.09 255.981 679.465 257.074 679.465C258.178 679.457 259.062 680.082 259.062 680.852Z"
            fill="#22223B"
          />
          <path
            d="M280.734 692.822C280.734 693.593 279.838 694.209 278.746 694.209C277.641 694.209 276.758 693.585 276.758 692.822C276.758 692.052 277.653 691.436 278.746 691.436C279.838 691.436 280.734 692.052 280.734 692.822Z"
            fill="#22223B"
          />
          <path
            d="M286.953 694.209C288.051 694.209 288.941 693.588 288.941 692.822C288.941 692.056 288.051 691.436 286.953 691.436C285.855 691.436 284.965 692.056 284.965 692.822C284.965 693.588 285.855 694.209 286.953 694.209Z"
            fill="#22223B"
          />
          <path
            d="M303.371 694.217C304.469 694.217 305.359 693.596 305.359 692.83C305.359 692.064 304.469 691.443 303.371 691.443C302.273 691.443 301.383 692.064 301.383 692.83C301.383 693.596 302.273 694.217 303.371 694.217Z"
            fill="#22223B"
          />
          <path
            d="M313.562 692.839C313.562 693.609 312.667 694.225 311.574 694.225C310.469 694.225 309.586 693.601 309.586 692.839C309.586 692.068 310.481 691.452 311.574 691.452C312.667 691.444 313.562 692.068 313.562 692.839Z"
            fill="#22223B"
          />
          <path
            d="M280.734 700.73C280.734 701.5 279.838 702.116 278.746 702.116C277.641 702.116 276.758 701.492 276.758 700.73C276.758 699.959 277.653 699.343 278.746 699.343C279.838 699.335 280.734 699.959 280.734 700.73Z"
            fill="#22223B"
          />
          <path
            d="M297.151 700.737C297.151 701.507 296.256 702.124 295.164 702.124C294.059 702.124 293.176 701.499 293.176 700.737C293.176 699.966 294.071 699.35 295.164 699.35C296.256 699.342 297.151 699.966 297.151 700.737Z"
            fill="#22223B"
          />
          <path
            d="M305.359 700.737C305.359 701.507 304.463 702.124 303.371 702.124C302.266 702.124 301.383 701.499 301.383 700.737C301.383 699.966 302.278 699.35 303.371 699.35C304.463 699.35 305.359 699.975 305.359 700.737Z"
            fill="#22223B"
          />
          <path
            d="M280.734 708.636C280.734 709.407 279.838 710.023 278.746 710.023C277.641 710.023 276.758 709.399 276.758 708.636C276.758 707.866 277.653 707.25 278.746 707.25C279.838 707.241 280.734 707.866 280.734 708.636Z"
            fill="#22223B"
          />
          <path
            d="M286.953 710.023C288.051 710.023 288.941 709.402 288.941 708.636C288.941 707.87 288.051 707.25 286.953 707.25C285.855 707.25 284.965 707.87 284.965 708.636C284.965 709.402 285.855 710.023 286.953 710.023Z"
            fill="#22223B"
          />
          <path
            d="M297.151 708.644C297.151 709.415 296.256 710.031 295.164 710.031C294.059 710.031 293.176 709.406 293.176 708.644C293.176 707.874 294.071 707.257 295.164 707.257C296.256 707.249 297.151 707.874 297.151 708.644Z"
            fill="#22223B"
          />
          <path
            d="M313.562 708.652C313.562 709.423 312.667 710.039 311.574 710.039C310.469 710.039 309.586 709.415 309.586 708.652C309.586 707.89 310.481 707.266 311.574 707.266C312.667 707.258 313.562 707.882 313.562 708.652Z"
            fill="#22223B"
          />
          <path
            d="M288.941 716.543C288.941 717.314 288.045 717.93 286.953 717.93C285.848 717.93 284.965 717.306 284.965 716.543C284.965 715.773 285.86 715.157 286.953 715.157C288.045 715.157 288.941 715.773 288.941 716.543Z"
            fill="#22223B"
          />
          <path
            d="M305.359 716.551C305.359 717.322 304.463 717.938 303.371 717.938C302.278 717.938 301.383 717.314 301.383 716.551C301.383 715.781 302.278 715.165 303.371 715.165C304.463 715.165 305.359 715.781 305.359 716.551Z"
            fill="#22223B"
          />
          <path
            d="M313.562 716.551C313.562 717.322 312.667 717.938 311.574 717.938C310.469 717.938 309.586 717.314 309.586 716.551C309.586 715.781 310.481 715.165 311.574 715.165C312.667 715.165 313.562 715.789 313.562 716.551Z"
            fill="#22223B"
          />
          <path
            d="M280.734 724.442C280.734 725.213 279.838 725.829 278.746 725.829C277.641 725.829 276.758 725.205 276.758 724.442C276.758 723.672 277.653 723.056 278.746 723.056C279.838 723.056 280.734 723.68 280.734 724.442Z"
            fill="#22223B"
          />
          <path
            d="M286.953 725.837C288.051 725.837 288.941 725.216 288.941 724.45C288.941 723.684 288.051 723.063 286.953 723.063C285.855 723.063 284.965 723.684 284.965 724.45C284.965 725.216 285.855 725.837 286.953 725.837Z"
            fill="#22223B"
          />
          <path
            d="M297.151 724.45C297.151 725.221 296.256 725.837 295.164 725.837C294.059 725.837 293.176 725.213 293.176 724.45C293.176 723.68 294.071 723.063 295.164 723.063C296.256 723.063 297.151 723.688 297.151 724.45Z"
            fill="#22223B"
          />
          <path
            d="M313.562 724.459C313.562 725.229 312.667 725.845 311.574 725.845C310.469 725.845 309.586 725.221 309.586 724.459C309.586 723.696 310.481 723.072 311.574 723.072C312.667 723.072 313.562 723.696 313.562 724.459Z"
            fill="#22223B"
          />
          <path
            d="M280.734 732.349C280.734 733.12 279.838 733.736 278.746 733.736C277.641 733.736 276.758 733.112 276.758 732.349C276.758 731.579 277.653 730.962 278.746 730.962C279.838 730.962 280.734 731.587 280.734 732.349Z"
            fill="#22223B"
          />
          <path
            d="M297.151 732.357C297.151 733.128 296.256 733.744 295.164 733.744C294.059 733.744 293.176 733.12 293.176 732.357C293.176 731.587 294.071 730.971 295.164 730.971C296.256 730.971 297.151 731.595 297.151 732.357Z"
            fill="#22223B"
          />
          <path
            d="M305.359 732.365C305.359 733.136 304.463 733.752 303.371 733.752C302.266 733.752 301.383 733.128 301.383 732.365C301.383 731.595 302.278 730.979 303.371 730.979C304.463 730.97 305.359 731.595 305.359 732.365Z"
            fill="#22223B"
          />
          <path
            d="M313.562 732.365C313.562 733.136 312.667 733.752 311.574 733.752C310.469 733.752 309.586 733.128 309.586 732.365C309.586 731.595 310.481 730.979 311.574 730.979C312.667 730.979 313.562 731.603 313.562 732.365Z"
            fill="#22223B"
          />
          <path
            d="M280.734 740.256C280.734 741.027 279.838 741.643 278.746 741.643C277.641 741.643 276.758 741.019 276.758 740.256C276.758 739.486 277.653 738.87 278.746 738.87C279.838 738.87 280.734 739.494 280.734 740.256Z"
            fill="#22223B"
          />
          <path
            d="M286.953 741.651C288.051 741.651 288.941 741.03 288.941 740.264C288.941 739.498 288.051 738.877 286.953 738.877C285.855 738.877 284.965 739.498 284.965 740.264C284.965 741.03 285.855 741.651 286.953 741.651Z"
            fill="#22223B"
          />
          <path
            d="M297.151 740.264C297.151 741.035 296.256 741.651 295.164 741.651C294.059 741.651 293.176 741.026 293.176 740.264C293.176 739.494 294.071 738.877 295.164 738.877C296.256 738.877 297.151 739.502 297.151 740.264Z"
            fill="#22223B"
          />
          <path
            d="M313.562 740.272C313.562 741.042 312.667 741.659 311.574 741.659C310.469 741.659 309.586 741.034 309.586 740.272C309.586 739.502 310.481 738.885 311.574 738.885C312.667 738.885 313.562 739.51 313.562 740.272Z"
            fill="#22223B"
          />
          <path
            d="M288.941 748.171C288.941 748.942 288.045 749.558 286.953 749.558C285.848 749.558 284.965 748.934 284.965 748.171C284.965 747.401 285.86 746.785 286.953 746.785C288.045 746.777 288.941 747.401 288.941 748.171Z"
            fill="#22223B"
          />
          <path
            d="M297.151 748.171C297.151 748.942 296.256 749.558 295.164 749.558C294.059 749.558 293.176 748.934 293.176 748.171C293.176 747.401 294.071 746.785 295.164 746.785C296.256 746.785 297.151 747.409 297.151 748.171Z"
            fill="#22223B"
          />
          <path
            d="M305.359 748.179C305.359 748.95 304.463 749.566 303.371 749.566C302.266 749.566 301.383 748.942 301.383 748.179C301.383 747.409 302.278 746.793 303.371 746.793C304.463 746.784 305.359 747.409 305.359 748.179Z"
            fill="#22223B"
          />
          <path
            d="M313.562 748.179C313.562 748.95 312.667 749.566 311.574 749.566C310.469 749.566 309.586 748.942 309.586 748.179C309.586 747.409 310.481 746.792 311.574 746.792C312.667 746.792 313.562 747.409 313.562 748.179Z"
            fill="#22223B"
          />
          <path
            d="M280.734 756.071C280.734 756.841 279.838 757.458 278.746 757.458C277.641 757.458 276.758 756.833 276.758 756.071C276.758 755.309 277.653 754.684 278.746 754.684C279.838 754.684 280.734 755.3 280.734 756.071Z"
            fill="#22223B"
          />
          <path
            d="M303.359 757.465C304.457 757.465 305.347 756.844 305.347 756.078C305.347 755.312 304.457 754.691 303.359 754.691C302.261 754.691 301.371 755.312 301.371 756.078C301.371 756.844 302.261 757.465 303.359 757.465Z"
            fill="#22223B"
          />
          <path
            d="M313.562 756.086C313.562 756.856 312.667 757.473 311.574 757.473C310.469 757.473 309.586 756.848 309.586 756.086C309.586 755.316 310.481 754.699 311.574 754.699C312.667 754.699 313.562 755.316 313.562 756.086Z"
            fill="#22223B"
          />
          <path
            d="M280.734 763.978C280.734 764.748 279.838 765.364 278.746 765.364C277.641 765.364 276.758 764.74 276.758 763.978C276.758 763.207 277.653 762.591 278.746 762.591C279.838 762.591 280.734 763.207 280.734 763.978Z"
            fill="#22223B"
          />
          <path
            d="M288.941 763.978C288.941 764.748 288.045 765.364 286.953 765.364C285.848 765.364 284.965 764.74 284.965 763.978C284.965 763.207 285.86 762.591 286.953 762.591C288.045 762.591 288.941 763.215 288.941 763.978Z"
            fill="#22223B"
          />
          <path
            d="M297.151 763.985C297.151 764.756 296.256 765.372 295.164 765.372C294.059 765.372 293.176 764.748 293.176 763.985C293.176 763.215 294.071 762.599 295.164 762.599C296.256 762.599 297.151 763.215 297.151 763.985Z"
            fill="#22223B"
          />
          <path
            d="M313.562 763.993C313.562 764.764 312.667 765.38 311.574 765.38C310.469 765.38 309.586 764.756 309.586 763.993C309.586 763.223 310.481 762.606 311.574 762.606C312.667 762.606 313.562 763.223 313.562 763.993Z"
            fill="#22223B"
          />
          <path
            d="M257.668 694.226C258.765 694.226 259.655 693.605 259.655 692.839C259.655 692.073 258.765 691.452 257.668 691.452C256.57 691.452 255.68 692.073 255.68 692.839C255.68 693.605 256.57 694.226 257.668 694.226Z"
            fill="#22223B"
          />
          <path
            d="M267.866 692.847C267.866 693.617 266.971 694.234 265.879 694.234C264.774 694.234 263.891 693.609 263.891 692.847C263.891 692.076 264.786 691.46 265.879 691.46C266.983 691.452 267.866 692.076 267.866 692.847Z"
            fill="#22223B"
          />
          <path
            d="M251.448 700.746C251.448 701.516 250.553 702.133 249.461 702.133C248.356 702.133 247.473 701.508 247.473 700.746C247.473 699.975 248.368 699.359 249.461 699.359C250.565 699.351 251.448 699.975 251.448 700.746Z"
            fill="#22223B"
          />
          <path
            d="M259.655 700.746C259.655 701.516 258.76 702.132 257.668 702.132C256.563 702.132 255.68 701.508 255.68 700.746C255.68 699.975 256.575 699.359 257.668 699.359C258.772 699.359 259.655 699.983 259.655 700.746Z"
            fill="#22223B"
          />
          <path
            d="M267.866 700.754C267.866 701.524 266.971 702.14 265.879 702.14C264.774 702.14 263.891 701.516 263.891 700.754C263.891 699.983 264.786 699.367 265.879 699.367C266.983 699.359 267.866 699.983 267.866 700.754Z"
            fill="#22223B"
          />
          <path
            d="M251.448 708.652C251.448 709.423 250.553 710.039 249.461 710.039C248.356 710.039 247.473 709.415 247.473 708.652C247.473 707.89 248.368 707.266 249.461 707.266C250.565 707.258 251.448 707.882 251.448 708.652Z"
            fill="#22223B"
          />
          <path
            d="M259.655 716.56C259.655 717.331 258.76 717.947 257.668 717.947C256.563 717.947 255.68 717.322 255.68 716.56C255.68 715.79 256.575 715.173 257.668 715.173C258.772 715.173 259.655 715.79 259.655 716.56Z"
            fill="#22223B"
          />
          <path
            d="M267.866 716.56C267.866 717.331 266.971 717.947 265.879 717.947C264.774 717.947 263.891 717.322 263.891 716.56C263.891 715.79 264.786 715.173 265.879 715.173C266.983 715.173 267.866 715.798 267.866 716.56Z"
            fill="#22223B"
          />
          <path
            d="M251.448 724.459C251.448 725.229 250.553 725.845 249.461 725.845C248.356 725.845 247.473 725.221 247.473 724.459C247.473 723.696 248.368 723.072 249.461 723.072C250.565 723.072 251.448 723.696 251.448 724.459Z"
            fill="#22223B"
          />
          <path
            d="M267.866 724.467C267.866 725.238 266.971 725.854 265.879 725.854C264.774 725.854 263.891 725.23 263.891 724.467C263.891 723.697 264.786 723.081 265.879 723.081C266.983 723.081 267.866 723.705 267.866 724.467Z"
            fill="#22223B"
          />
          <path
            d="M251.448 732.366C251.448 733.136 250.553 733.753 249.461 733.753C248.356 733.753 247.473 733.128 247.473 732.366C247.473 731.595 248.368 730.979 249.461 730.979C250.565 730.979 251.448 731.603 251.448 732.366Z"
            fill="#22223B"
          />
          <path
            d="M259.655 732.374C259.655 733.145 258.76 733.761 257.668 733.761C256.575 733.761 255.68 733.136 255.68 732.374C255.68 731.604 256.575 730.987 257.668 730.987C258.76 730.987 259.655 731.604 259.655 732.374Z"
            fill="#22223B"
          />
          <path
            d="M267.866 740.281C267.866 741.051 266.971 741.668 265.879 741.668C264.774 741.668 263.891 741.043 263.891 740.281C263.891 739.519 264.786 738.894 265.879 738.894C266.983 738.894 267.866 739.519 267.866 740.281Z"
            fill="#22223B"
          />
          <path
            d="M251.448 748.18C251.448 748.95 250.553 749.566 249.461 749.566C248.356 749.566 247.473 748.942 247.473 748.18C247.473 747.409 248.368 746.793 249.461 746.793C250.565 746.793 251.448 747.409 251.448 748.18Z"
            fill="#22223B"
          />
          <path
            d="M259.655 748.188C259.655 748.959 258.76 749.575 257.668 749.575C256.563 749.575 255.68 748.95 255.68 748.188C255.68 747.418 256.575 746.801 257.668 746.801C258.772 746.793 259.655 747.418 259.655 748.188Z"
            fill="#22223B"
          />
          <path
            d="M251.448 756.086C251.448 756.857 250.553 757.473 249.461 757.473C248.356 757.473 247.473 756.849 247.473 756.086C247.473 755.316 248.368 754.7 249.461 754.7C250.565 754.7 251.448 755.316 251.448 756.086Z"
            fill="#22223B"
          />
          <path
            d="M267.866 756.095C267.866 756.865 266.971 757.482 265.879 757.482C264.774 757.482 263.891 756.857 263.891 756.095C263.891 755.332 264.786 754.708 265.879 754.708C266.983 754.708 267.866 755.324 267.866 756.095Z"
            fill="#22223B"
          />
          <path
            d="M251.448 763.994C251.448 764.764 250.553 765.38 249.461 765.38C248.356 765.38 247.473 764.756 247.473 763.994C247.473 763.223 248.368 762.607 249.461 762.607C250.565 762.607 251.448 763.223 251.448 763.994Z"
            fill="#22223B"
          />
          <path
            d="M267.866 764.002C267.866 764.772 266.971 765.389 265.879 765.389C264.774 765.389 263.891 764.764 263.891 764.002C263.891 763.232 264.786 762.615 265.879 762.615C266.983 762.615 267.866 763.232 267.866 764.002Z"
            fill="#22223B"
          />
          <path
            d="M251.452 692.839C251.452 693.609 250.557 694.225 249.464 694.225C248.36 694.225 247.477 693.601 247.477 692.839C247.477 692.068 248.372 691.452 249.464 691.452C250.569 691.444 251.452 692.068 251.452 692.839Z"
            fill="#22223B"
          />
          <path
            d="M267.866 708.653C267.866 709.423 266.971 710.04 265.879 710.04C264.774 710.04 263.891 709.415 263.891 708.653C263.891 707.882 264.786 707.266 265.879 707.266C266.983 707.266 267.866 707.891 267.866 708.653Z"
            fill="#22223B"
          />
          <path
            d="M251.452 716.552C251.452 717.322 250.557 717.939 249.464 717.939C248.36 717.939 247.477 717.314 247.477 716.552C247.477 715.781 248.372 715.165 249.464 715.165C250.569 715.165 251.452 715.789 251.452 716.552Z"
            fill="#22223B"
          />
          <path
            d="M251.452 740.272C251.452 741.043 250.557 741.659 249.464 741.659C248.36 741.659 247.477 741.035 247.477 740.272C247.477 739.502 248.372 738.886 249.464 738.886C250.569 738.886 251.452 739.51 251.452 740.272Z"
            fill="#22223B"
          />
          <path
            d="M267.866 748.188C267.866 748.958 266.971 749.575 265.879 749.575C264.774 749.575 263.891 748.95 263.891 748.188C263.891 747.418 264.786 746.801 265.879 746.801C266.983 746.801 267.866 747.418 267.866 748.188Z"
            fill="#22223B"
          />
        </g>
        <path
          d="M1412.12 447.072H1323.95V812.274H1412.12V447.072Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1335.39 626.647V812.274"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1335.39 456.329V466.556V478.573V613.409"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1344.73 745.634V754.295V790.234V812.273"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1344.73 724.555V734.242"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1344.73 590.447V655.455V686.63"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1344.73 543.982V577.469"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1344.73 507.614V530.874"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1344.73 456.329V495.671"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1354.08 677.96V782.002"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1354.08 609.186V663.799"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1354.08 496.52V593.57"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1354.08 456.329V473.819"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1363.43 745.634V759.907"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1363.43 673.177V726.504"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1363.43 558.302V650.644"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1363.43 490.665V540.868"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1363.43 456.329V480.223"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1372.77 632.362V757.996"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1372.77 527.145V617.119"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1372.77 456.329V512.275"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1382.12 743.378V812.273"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1382.12 702.376V731.538"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1382.12 645.861V690.797"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1382.12 597.168V635.728"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1382.12 529.093V582.886"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1382.12 497.881V518.149"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1382.12 456.329V484.661"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1391.48 673.979V751.172"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1391.48 622.899V661.831"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1391.48 554.013V605.568"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1391.48 480.223V537.111"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1391.48 456.329V466.957"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1400.82 731.538V812.274"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1400.82 650.645V719.456"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1400.82 516.274V635.112"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1400.82 456.329V502.076"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1024.47 797.926C1024.56 797.386 1024.62 796.854 1024.64 796.351C1024.64 796.332 1024.64 796.304 1024.64 796.285C1024.69 795.558 1024.68 794.878 1024.64 794.244C1024.5 792.016 1023.97 790.515 1023.97 790.515C1012.53 756.496 967.388 752.086 952.009 751.583C952.009 751.555 951.997 751.545 951.997 751.545C951.997 751.545 951.137 751.517 949.614 751.527C949.567 751.527 949.532 751.527 949.486 751.527C947.8 751.508 946.847 751.545 946.847 751.545C946.847 751.545 946.847 751.555 946.835 751.583C931.467 752.086 886.328 756.496 874.889 790.515C874.889 790.515 874.273 792.258 874.191 794.766C874.191 794.831 874.191 794.906 874.18 794.98C874.18 795.279 874.191 795.605 874.203 795.931C874.203 796.08 874.203 796.22 874.215 796.369C874.249 796.901 874.308 797.442 874.401 798.01C874.877 800.844 876.249 804.023 879.492 806.727C882.468 809.198 887.025 811.267 893.93 812.274C893.93 812.274 905.009 812.088 914.483 807.547C915.018 807.296 915.564 807.025 916.134 806.755C916.378 806.643 916.622 806.522 916.878 806.41C917.227 806.252 917.564 806.084 917.924 805.925C918.192 805.795 918.482 805.674 918.75 805.543C919.098 805.385 919.447 805.217 919.808 805.058C920.098 804.928 920.389 804.797 920.679 804.667C921.04 804.499 921.412 804.34 921.784 804.173C922.086 804.042 922.388 803.912 922.679 803.781C923.062 803.613 923.435 803.445 923.818 803.287C924.12 803.156 924.434 803.026 924.736 802.895C925.132 802.728 925.527 802.56 925.922 802.401C926.236 802.271 926.538 802.15 926.852 802.019C927.259 801.851 927.666 801.693 928.073 801.534C928.387 801.413 928.701 801.283 929.026 801.161C929.433 801.003 929.851 800.844 930.258 800.695C930.572 800.574 930.898 800.453 931.223 800.341C931.642 800.192 932.049 800.043 932.467 799.893C932.781 799.782 933.106 799.67 933.42 799.558C933.839 799.418 934.257 799.278 934.676 799.148C934.99 799.045 935.315 798.942 935.629 798.84C936.048 798.709 936.466 798.588 936.896 798.458C937.21 798.364 937.524 798.271 937.826 798.187C938.256 798.066 938.675 797.954 939.093 797.852C939.395 797.777 939.698 797.693 940 797.619C940.43 797.516 940.86 797.423 941.29 797.33C941.569 797.264 941.86 797.199 942.139 797.143C942.604 797.05 943.069 796.966 943.522 796.891C943.755 796.854 943.999 796.798 944.231 796.77C944.917 796.668 945.58 796.574 946.243 796.509C946.277 796.509 946.312 796.5 946.347 796.5C946.987 796.435 947.614 796.397 948.23 796.369C948.242 796.369 948.242 796.369 948.254 796.369C948.265 796.369 948.277 796.369 948.289 796.369H948.3C948.358 796.379 948.416 796.369 948.475 796.369C948.544 796.369 948.614 796.379 948.684 796.369C948.928 796.36 949.16 796.351 949.405 796.351C949.649 796.351 949.893 796.36 950.137 796.369C950.207 796.369 950.265 796.369 950.323 796.369C950.393 796.369 950.462 796.369 950.521 796.369H950.532C951.218 796.388 951.916 796.444 952.625 796.519C953.194 796.574 953.764 796.649 954.345 796.742C954.415 796.752 954.485 796.761 954.566 796.77C955.205 796.873 955.856 796.985 956.519 797.115C956.531 797.115 956.554 797.125 956.566 797.125C966.075 799.026 977.025 804.079 984.337 807.585C993.8 812.125 1004.89 812.311 1004.89 812.311C1005.68 812.199 1006.42 812.06 1007.15 811.92C1007.29 811.892 1007.41 811.864 1007.55 811.836C1009.01 811.538 1010.34 811.193 1011.56 810.801C1011.64 810.773 1011.73 810.745 1011.81 810.717C1013.04 810.307 1014.17 809.859 1015.18 809.365C1015.22 809.347 1015.27 809.319 1015.33 809.3C1016.35 808.797 1017.27 808.256 1018.1 807.687C1018.12 807.669 1018.14 807.659 1018.17 807.641C1022.26 804.769 1023.9 801.18 1024.43 798.029C1024.43 798.029 1024.43 798.029 1024.43 798.038C1024.46 797.982 1024.46 797.954 1024.47 797.926Z"
          stroke="#22223B"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <mask
          id="mask4_0_35402"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="1061"
          y="449"
          width="89"
          height="376"
        >
          <path
            d="M1149.45 449.683V824.338H1061.25V817.868H1085.55C1089.4 817.868 1092.52 815.36 1092.52 812.274V667.006L1092.44 666.745C1092.36 666.344 1092.23 665.944 1092.05 665.552C1091.92 665.31 1091.79 665.095 1091.69 664.955C1091.56 664.741 1091.36 664.461 1091.06 664.154L1061.25 633.398V449.683H1149.45Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask4_0_35402)">
          <path
            d="M1107.8 490.162L1142.71 525.691V541.326"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.81 490.162L1072.9 525.691V541.326"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1142.72 566.544V538.277L1140.09 534.66L1136.34 529.467L1132.62 524.339L1128.84 519.147L1125.13 514.019L1121.36 508.836L1117.65 503.708L1113.88 498.515L1107.81 490.162L1101.75 498.515L1097.97 503.708L1094.27 508.836L1090.5 514.019L1086.78 519.147L1083.01 524.339L1079.29 529.467L1075.54 534.66L1072.91 538.277V566.544"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1100.66 533.998L1101.71 527.584L1102.77 521.077L1103.84 514.569L1104.91 508.053L1105.97 501.545L1107.81 490.162L1109.67 501.545L1110.73 508.053L1111.8 514.569L1112.86 521.077L1113.92 527.584L1114.96 533.998"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1142.72 614.939V564.39V564.381V564.167H1142.52L1133.03 553.641L1127.15 547.125L1121.27 540.617L1115.4 534.11L1115.06 533.728L1109.52 527.584L1107.81 525.691L1106.11 527.584L1100.57 533.728L1100.23 534.11L1094.35 540.617L1088.48 547.125L1082.59 553.641L1073.11 564.167H1072.9V614.939"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1142.72 662.224V614.939L1107.81 577.284L1072.9 614.939V662.224"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.81 624.569L1072.9 662.224V812.275H1142.72V662.224L1107.81 624.569Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1115.07 533.513V812.274H1100.57V533.513L1107.81 525.691L1115.07 533.513Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.81 467.517V498.814"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1105.96 501.545H1099.55"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1116.07 501.545H1109.66"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1120.79 508.052H1110.72"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1104.9 508.052H1094.83"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1103.83 514.569H1090.1"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1125.51 514.569H1111.79"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1102.76 521.076H1085.38"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1130.24 521.076H1112.85"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1134.96 527.583H1113.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1101.7 527.583H1080.64"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1100.22 534.109H1075.93"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1139.69 534.109H1115.4"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1094.34 540.617H1072.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1142.88 540.617H1121.27"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1142.88 547.124H1127.15"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1088.47 547.124H1072.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1142.88 553.641H1133.03"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1082.59 553.641H1072.91"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1097.55 552.504C1097.55 553.296 1096.74 553.93 1095.77 553.93C1094.78 553.93 1093.99 553.287 1093.99 552.504C1093.99 551.711 1094.79 551.077 1095.77 551.077C1096.74 551.068 1097.55 551.711 1097.55 552.504Z"
            fill="#22223B"
          />
          <path
            d="M1097.55 580.36C1097.55 581.153 1096.74 581.786 1095.77 581.786C1094.78 581.786 1093.99 581.143 1093.99 580.36C1093.99 579.577 1094.79 578.934 1095.77 578.934C1096.74 578.924 1097.55 579.568 1097.55 580.36Z"
            fill="#22223B"
          />
          <path
            d="M1097.55 598.921C1097.55 599.714 1096.74 600.348 1095.77 600.348C1094.78 600.348 1093.99 599.705 1093.99 598.921C1093.99 598.129 1094.79 597.495 1095.77 597.495C1096.74 597.495 1097.55 598.138 1097.55 598.921Z"
            fill="#22223B"
          />
          <path
            d="M1097.55 617.493C1097.55 618.285 1096.74 618.919 1095.77 618.919C1094.78 618.919 1093.99 618.276 1093.99 617.493C1093.99 616.71 1094.79 616.066 1095.77 616.066C1096.74 616.066 1097.55 616.71 1097.55 617.493Z"
            fill="#22223B"
          />
          <path
            d="M1097.55 626.778C1097.55 627.57 1096.74 628.204 1095.77 628.204C1094.78 628.204 1093.99 627.561 1093.99 626.778C1093.99 625.985 1094.79 625.352 1095.77 625.352C1096.74 625.352 1097.55 625.985 1097.55 626.778Z"
            fill="#22223B"
          />
          <path
            d="M1097.55 645.349C1097.55 646.142 1096.74 646.776 1095.77 646.776C1094.78 646.776 1093.99 646.132 1093.99 645.349C1093.99 644.557 1094.79 643.923 1095.77 643.923C1096.74 643.914 1097.55 644.557 1097.55 645.349Z"
            fill="#22223B"
          />
          <path
            d="M1097.55 654.634C1097.55 655.427 1096.74 656.061 1095.77 656.061C1094.78 656.061 1093.99 655.418 1093.99 654.634C1093.99 653.842 1094.79 653.208 1095.77 653.208C1096.74 653.199 1097.55 653.842 1097.55 654.634Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 561.789C1088.62 562.581 1087.81 563.215 1086.84 563.215C1085.85 563.215 1085.06 562.572 1085.06 561.789C1085.06 560.996 1085.86 560.362 1086.84 560.362C1087.83 560.353 1088.62 560.996 1088.62 561.789Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 571.074C1088.62 571.867 1087.81 572.501 1086.84 572.501C1085.85 572.501 1085.06 571.858 1085.06 571.074C1085.06 570.282 1085.86 569.648 1086.84 569.648C1087.83 569.639 1088.62 570.282 1088.62 571.074Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 589.645C1088.62 590.438 1087.81 591.072 1086.84 591.072C1085.85 591.072 1085.06 590.428 1085.06 589.645C1085.06 588.853 1085.86 588.219 1086.84 588.219C1087.83 588.21 1088.62 588.853 1088.62 589.645Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 608.207C1088.62 609 1087.81 609.634 1086.84 609.634C1085.85 609.634 1085.06 608.99 1085.06 608.207C1085.06 607.424 1085.86 606.781 1086.84 606.781C1087.83 606.781 1088.62 607.424 1088.62 608.207Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 617.493C1088.62 618.285 1087.81 618.919 1086.84 618.919C1085.85 618.919 1085.06 618.276 1085.06 617.493C1085.06 616.71 1085.86 616.066 1086.84 616.066C1087.83 616.066 1088.62 616.71 1088.62 617.493Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 626.778C1088.62 627.57 1087.81 628.204 1086.84 628.204C1085.85 628.204 1085.06 627.561 1085.06 626.778C1085.06 625.985 1085.86 625.352 1086.84 625.352C1087.83 625.352 1088.62 625.985 1088.62 626.778Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 654.634C1088.62 655.427 1087.81 656.061 1086.84 656.061C1085.85 656.061 1085.06 655.418 1085.06 654.634C1085.06 653.842 1085.86 653.208 1086.84 653.208C1087.83 653.199 1088.62 653.842 1088.62 654.634Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 663.92C1088.62 664.713 1087.81 665.347 1086.84 665.347C1085.85 665.347 1085.06 664.703 1085.06 663.92C1085.06 663.137 1085.86 662.494 1086.84 662.494C1087.83 662.484 1088.62 663.128 1088.62 663.92Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 673.206C1088.62 673.998 1087.81 674.632 1086.84 674.632C1085.85 674.632 1085.06 673.989 1085.06 673.206C1085.06 672.413 1085.86 671.779 1086.84 671.779C1087.83 671.77 1088.62 672.413 1088.62 673.206Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 682.491C1088.62 683.284 1087.81 683.918 1086.84 683.918C1085.85 683.918 1085.06 683.275 1085.06 682.491C1085.06 681.699 1085.86 681.065 1086.84 681.065C1087.83 681.056 1088.62 681.699 1088.62 682.491Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 691.767C1088.62 692.56 1087.81 693.194 1086.84 693.194C1085.85 693.194 1085.06 692.55 1085.06 691.767C1085.06 690.975 1085.86 690.341 1086.84 690.341C1087.83 690.341 1088.62 690.984 1088.62 691.767Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 719.624C1088.62 720.417 1087.81 721.051 1086.84 721.051C1085.85 721.051 1085.06 720.407 1085.06 719.624C1085.06 718.832 1085.86 718.198 1086.84 718.198C1087.83 718.198 1088.62 718.832 1088.62 719.624Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 747.481C1088.62 748.273 1087.81 748.907 1086.84 748.907C1085.85 748.907 1085.06 748.264 1085.06 747.481C1085.06 746.698 1085.86 746.054 1086.84 746.054C1087.83 746.045 1088.62 746.688 1088.62 747.481Z"
            fill="#22223B"
          />
          <path
            d="M1088.62 756.766C1088.62 757.559 1087.81 758.193 1086.84 758.193C1085.85 758.193 1085.06 757.549 1085.06 756.766C1085.06 755.974 1085.86 755.34 1086.84 755.34C1087.83 755.331 1088.62 755.974 1088.62 756.766Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 571.074C1079.7 571.867 1078.9 572.501 1077.92 572.501C1076.93 572.501 1076.14 571.858 1076.14 571.074C1076.14 570.282 1076.94 569.648 1077.92 569.648C1078.9 569.639 1079.7 570.282 1079.7 571.074Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 589.645C1079.7 590.438 1078.9 591.072 1077.92 591.072C1076.93 591.072 1076.14 590.428 1076.14 589.645C1076.14 588.853 1076.94 588.219 1077.92 588.219C1078.9 588.21 1079.7 588.853 1079.7 589.645Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 598.921C1079.7 599.714 1078.9 600.348 1077.92 600.348C1076.93 600.348 1076.14 599.705 1076.14 598.921C1076.14 598.129 1076.94 597.495 1077.92 597.495C1078.9 597.495 1079.7 598.138 1079.7 598.921Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 617.493C1079.7 618.285 1078.9 618.919 1077.92 618.919C1076.93 618.919 1076.14 618.276 1076.14 617.493C1076.14 616.71 1076.94 616.066 1077.92 616.066C1078.9 616.066 1079.7 616.71 1079.7 617.493Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 645.349C1079.7 646.142 1078.9 646.776 1077.92 646.776C1076.93 646.776 1076.14 646.132 1076.14 645.349C1076.14 644.557 1076.94 643.923 1077.92 643.923C1078.9 643.914 1079.7 644.557 1079.7 645.349Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 673.206C1079.7 673.998 1078.9 674.632 1077.92 674.632C1076.93 674.632 1076.14 673.989 1076.14 673.206C1076.14 672.413 1076.94 671.779 1077.92 671.779C1078.9 671.77 1079.7 672.413 1079.7 673.206Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 691.767C1079.7 692.56 1078.9 693.194 1077.92 693.194C1076.93 693.194 1076.14 692.55 1076.14 691.767C1076.14 690.975 1076.94 690.341 1077.92 690.341C1078.9 690.341 1079.7 690.984 1079.7 691.767Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 701.053C1079.7 701.846 1078.9 702.48 1077.92 702.48C1076.93 702.48 1076.14 701.836 1076.14 701.053C1076.14 700.261 1076.94 699.627 1077.92 699.627C1078.9 699.627 1079.7 700.27 1079.7 701.053Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 710.338C1079.7 711.131 1078.9 711.765 1077.92 711.765C1076.93 711.765 1076.14 711.122 1076.14 710.338C1076.14 709.555 1076.94 708.912 1077.92 708.912C1078.9 708.912 1079.7 709.555 1079.7 710.338Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 719.624C1079.7 720.417 1078.9 721.051 1077.92 721.051C1076.93 721.051 1076.14 720.407 1076.14 719.624C1076.14 718.832 1076.94 718.198 1077.92 718.198C1078.9 718.198 1079.7 718.832 1079.7 719.624Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 728.91C1079.7 729.702 1078.9 730.336 1077.92 730.336C1076.93 730.336 1076.14 729.693 1076.14 728.91C1076.14 728.117 1076.94 727.483 1077.92 727.483C1078.9 727.483 1079.7 728.117 1079.7 728.91Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 747.481C1079.7 748.273 1078.9 748.907 1077.92 748.907C1076.93 748.907 1076.14 748.264 1076.14 747.481C1076.14 746.698 1076.94 746.054 1077.92 746.054C1078.9 746.045 1079.7 746.688 1079.7 747.481Z"
            fill="#22223B"
          />
          <path
            d="M1079.7 756.766C1079.7 757.559 1078.9 758.193 1077.92 758.193C1076.93 758.193 1076.14 757.549 1076.14 756.766C1076.14 755.974 1076.94 755.34 1077.92 755.34C1078.9 755.331 1079.7 755.974 1079.7 756.766Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 552.504C1118.26 553.296 1119.06 553.93 1120.04 553.93C1121.03 553.93 1121.82 553.287 1121.82 552.504C1121.82 551.711 1121.02 551.077 1120.04 551.077C1119.06 551.068 1118.26 551.711 1118.26 552.504Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 561.789C1118.26 562.582 1119.06 563.216 1120.04 563.216C1121.03 563.216 1121.82 562.572 1121.82 561.789C1121.82 560.997 1121.02 560.363 1120.04 560.363C1119.06 560.354 1118.26 560.997 1118.26 561.789Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 571.074C1118.26 571.867 1119.06 572.501 1120.04 572.501C1121.03 572.501 1121.82 571.858 1121.82 571.074C1121.82 570.282 1121.02 569.648 1120.04 569.648C1119.06 569.639 1118.26 570.282 1118.26 571.074Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 580.36C1118.26 581.153 1119.06 581.786 1120.04 581.786C1121.03 581.786 1121.82 581.143 1121.82 580.36C1121.82 579.577 1121.02 578.934 1120.04 578.934C1119.06 578.924 1118.26 579.568 1118.26 580.36Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 598.922C1118.26 599.714 1119.06 600.348 1120.04 600.348C1121.03 600.348 1121.82 599.705 1121.82 598.922C1121.82 598.13 1121.02 597.496 1120.04 597.496C1119.06 597.496 1118.26 598.139 1118.26 598.922Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 608.207C1118.26 609 1119.06 609.634 1120.04 609.634C1121.03 609.634 1121.82 608.99 1121.82 608.207C1121.82 607.424 1121.02 606.781 1120.04 606.781C1119.06 606.781 1118.26 607.424 1118.26 608.207Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 617.493C1118.26 618.285 1119.06 618.919 1120.04 618.919C1121.03 618.919 1121.82 618.276 1121.82 617.493C1121.82 616.71 1121.02 616.066 1120.04 616.066C1119.06 616.066 1118.26 616.71 1118.26 617.493Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 626.778C1118.26 627.571 1119.06 628.205 1120.04 628.205C1121.03 628.205 1121.82 627.562 1121.82 626.778C1121.82 625.986 1121.02 625.352 1120.04 625.352C1119.06 625.352 1118.26 625.986 1118.26 626.778Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 645.349C1118.26 646.142 1119.06 646.776 1120.04 646.776C1121.03 646.776 1121.82 646.132 1121.82 645.349C1121.82 644.557 1121.02 643.923 1120.04 643.923C1119.06 643.914 1118.26 644.557 1118.26 645.349Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 654.634C1118.26 655.427 1119.06 656.061 1120.04 656.061C1121.03 656.061 1121.82 655.418 1121.82 654.634C1121.82 653.842 1121.02 653.208 1120.04 653.208C1119.06 653.199 1118.26 653.842 1118.26 654.634Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 673.206C1118.26 673.999 1119.06 674.633 1120.04 674.633C1121.03 674.633 1121.82 673.989 1121.82 673.206C1121.82 672.414 1121.02 671.78 1120.04 671.78C1119.06 671.771 1118.26 672.414 1118.26 673.206Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 682.491C1118.26 683.284 1119.06 683.918 1120.04 683.918C1121.03 683.918 1121.82 683.275 1121.82 682.491C1121.82 681.699 1121.02 681.065 1120.04 681.065C1119.06 681.056 1118.26 681.699 1118.26 682.491Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 691.768C1118.26 692.56 1119.06 693.194 1120.04 693.194C1121.03 693.194 1121.82 692.551 1121.82 691.768C1121.82 690.975 1121.02 690.341 1120.04 690.341C1119.06 690.341 1118.26 690.985 1118.26 691.768Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 701.053C1118.26 701.846 1119.06 702.48 1120.04 702.48C1121.03 702.48 1121.82 701.836 1121.82 701.053C1121.82 700.261 1121.02 699.627 1120.04 699.627C1119.06 699.627 1118.26 700.27 1118.26 701.053Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 719.624C1118.26 720.417 1119.06 721.051 1120.04 721.051C1121.03 721.051 1121.82 720.407 1121.82 719.624C1121.82 718.832 1121.02 718.198 1120.04 718.198C1119.06 718.198 1118.26 718.832 1118.26 719.624Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 728.91C1118.26 729.702 1119.06 730.336 1120.04 730.336C1121.03 730.336 1121.82 729.693 1121.82 728.91C1121.82 728.117 1121.02 727.483 1120.04 727.483C1119.06 727.483 1118.26 728.117 1118.26 728.91Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 738.195C1118.26 738.988 1119.06 739.622 1120.04 739.622C1121.03 739.622 1121.82 738.979 1121.82 738.195C1121.82 737.412 1121.02 736.769 1120.04 736.769C1119.06 736.769 1118.26 737.403 1118.26 738.195Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 747.481C1118.26 748.273 1119.06 748.907 1120.04 748.907C1121.03 748.907 1121.82 748.264 1121.82 747.481C1121.82 746.698 1121.02 746.054 1120.04 746.054C1119.06 746.045 1118.26 746.688 1118.26 747.481Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 756.766C1118.26 757.559 1119.06 758.193 1120.04 758.193C1121.03 758.193 1121.82 757.549 1121.82 756.766C1121.82 755.974 1121.02 755.34 1120.04 755.34C1119.06 755.331 1118.26 755.974 1118.26 756.766Z"
            fill="#22223B"
          />
          <path
            d="M1118.26 766.051C1118.26 766.844 1119.06 767.478 1120.04 767.478C1121.03 767.478 1121.82 766.835 1121.82 766.051C1121.82 765.259 1121.02 764.625 1120.04 764.625C1119.06 764.616 1118.26 765.259 1118.26 766.051Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 561.789C1127.19 562.582 1127.99 563.216 1128.97 563.216C1129.96 563.216 1130.75 562.572 1130.75 561.789C1130.75 560.997 1129.95 560.363 1128.97 560.363C1127.99 560.354 1127.19 560.997 1127.19 561.789Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 571.074C1127.19 571.867 1127.99 572.501 1128.97 572.501C1129.96 572.501 1130.75 571.858 1130.75 571.074C1130.75 570.282 1129.95 569.648 1128.97 569.648C1127.99 569.639 1127.19 570.282 1127.19 571.074Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 589.646C1127.19 590.438 1127.99 591.072 1128.97 591.072C1129.96 591.072 1130.75 590.429 1130.75 589.646C1130.75 588.853 1129.95 588.219 1128.97 588.219C1127.99 588.21 1127.19 588.853 1127.19 589.646Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 608.207C1127.19 609 1127.99 609.634 1128.97 609.634C1129.96 609.634 1130.75 608.99 1130.75 608.207C1130.75 607.424 1129.95 606.781 1128.97 606.781C1127.99 606.781 1127.19 607.424 1127.19 608.207Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 626.778C1127.19 627.571 1127.99 628.205 1128.97 628.205C1129.96 628.205 1130.75 627.562 1130.75 626.778C1130.75 625.986 1129.95 625.352 1128.97 625.352C1127.99 625.352 1127.19 625.986 1127.19 626.778Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 654.634C1127.19 655.427 1127.99 656.061 1128.97 656.061C1129.96 656.061 1130.75 655.418 1130.75 654.634C1130.75 653.842 1129.95 653.208 1128.97 653.208C1127.99 653.199 1127.19 653.842 1127.19 654.634Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 663.92C1127.19 664.713 1127.99 665.347 1128.97 665.347C1129.96 665.347 1130.75 664.703 1130.75 663.92C1130.75 663.137 1129.95 662.494 1128.97 662.494C1127.99 662.484 1127.19 663.128 1127.19 663.92Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 682.491C1127.19 683.284 1127.99 683.918 1128.97 683.918C1129.96 683.918 1130.75 683.275 1130.75 682.491C1130.75 681.699 1129.95 681.065 1128.97 681.065C1127.99 681.056 1127.19 681.699 1127.19 682.491Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 691.768C1127.19 692.56 1127.99 693.194 1128.97 693.194C1129.96 693.194 1130.75 692.551 1130.75 691.768C1130.75 690.975 1129.95 690.341 1128.97 690.341C1127.99 690.341 1127.19 690.985 1127.19 691.768Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 719.624C1127.19 720.417 1127.99 721.051 1128.97 721.051C1129.96 721.051 1130.75 720.407 1130.75 719.624C1130.75 718.832 1129.95 718.198 1128.97 718.198C1127.99 718.198 1127.19 718.832 1127.19 719.624Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 738.195C1127.19 738.988 1127.99 739.622 1128.97 739.622C1129.96 739.622 1130.75 738.979 1130.75 738.195C1130.75 737.412 1129.95 736.769 1128.97 736.769C1127.99 736.769 1127.19 737.403 1127.19 738.195Z"
            fill="#22223B"
          />
          <path
            d="M1127.19 756.766C1127.19 757.559 1127.99 758.193 1128.97 758.193C1129.96 758.193 1130.75 757.549 1130.75 756.766C1130.75 755.974 1129.95 755.34 1128.97 755.34C1127.99 755.331 1127.19 755.974 1127.19 756.766Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 571.074C1136.12 571.867 1136.92 572.501 1137.9 572.501C1138.88 572.501 1139.67 571.858 1139.67 571.074C1139.67 570.282 1138.87 569.648 1137.9 569.648C1136.91 569.639 1136.12 570.282 1136.12 571.074Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 580.36C1136.12 581.153 1136.92 581.786 1137.9 581.786C1138.88 581.786 1139.67 581.143 1139.67 580.36C1139.67 579.577 1138.87 578.934 1137.9 578.934C1136.91 578.924 1136.12 579.568 1136.12 580.36Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 589.646C1136.12 590.438 1136.92 591.072 1137.9 591.072C1138.88 591.072 1139.67 590.429 1139.67 589.646C1139.67 588.853 1138.87 588.219 1137.9 588.219C1136.91 588.21 1136.12 588.853 1136.12 589.646Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 598.922C1136.12 599.714 1136.92 600.348 1137.9 600.348C1138.88 600.348 1139.67 599.705 1139.67 598.922C1139.67 598.13 1138.87 597.496 1137.9 597.496C1136.91 597.496 1136.12 598.139 1136.12 598.922Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 617.493C1136.12 618.285 1136.92 618.919 1137.9 618.919C1138.88 618.919 1139.67 618.276 1139.67 617.493C1139.67 616.71 1138.87 616.066 1137.9 616.066C1136.91 616.066 1136.12 616.71 1136.12 617.493Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 626.778C1136.12 627.571 1136.92 628.205 1137.9 628.205C1138.88 628.205 1139.67 627.562 1139.67 626.778C1139.67 625.986 1138.87 625.352 1137.9 625.352C1136.91 625.352 1136.12 625.986 1136.12 626.778Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 636.064C1136.12 636.856 1136.92 637.49 1137.9 637.49C1138.88 637.49 1139.67 636.847 1139.67 636.064C1139.67 635.271 1138.87 634.637 1137.9 634.637C1136.91 634.637 1136.12 635.271 1136.12 636.064Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 645.349C1136.12 646.142 1136.92 646.776 1137.9 646.776C1138.88 646.776 1139.67 646.132 1139.67 645.349C1139.67 644.557 1138.87 643.923 1137.9 643.923C1136.91 643.914 1136.12 644.557 1136.12 645.349Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 663.92C1136.12 664.713 1136.92 665.347 1137.9 665.347C1138.88 665.347 1139.67 664.703 1139.67 663.92C1139.67 663.137 1138.87 662.494 1137.9 662.494C1136.91 662.484 1136.12 663.128 1136.12 663.92Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 673.206C1136.12 673.999 1136.92 674.633 1137.9 674.633C1138.88 674.633 1139.67 673.989 1139.67 673.206C1139.67 672.414 1138.87 671.78 1137.9 671.78C1136.91 671.771 1136.12 672.414 1136.12 673.206Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 691.768C1136.12 692.56 1136.92 693.194 1137.9 693.194C1138.88 693.194 1139.67 692.551 1139.67 691.768C1139.67 690.975 1138.87 690.341 1137.9 690.341C1136.91 690.341 1136.12 690.985 1136.12 691.768Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 701.053C1136.12 701.846 1136.92 702.48 1137.9 702.48C1138.88 702.48 1139.67 701.836 1139.67 701.053C1139.67 700.261 1138.87 699.627 1137.9 699.627C1136.91 699.627 1136.12 700.27 1136.12 701.053Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 710.339C1136.12 711.131 1136.92 711.765 1137.9 711.765C1138.88 711.765 1139.67 711.122 1139.67 710.339C1139.67 709.556 1138.87 708.913 1137.9 708.913C1136.91 708.913 1136.12 709.556 1136.12 710.339Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 719.624C1136.12 720.417 1136.92 721.051 1137.9 721.051C1138.88 721.051 1139.67 720.407 1139.67 719.624C1139.67 718.832 1138.87 718.198 1137.9 718.198C1136.91 718.198 1136.12 718.832 1136.12 719.624Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 738.195C1136.12 738.988 1136.92 739.622 1137.9 739.622C1138.88 739.622 1139.67 738.979 1139.67 738.195C1139.67 737.412 1138.87 736.769 1137.9 736.769C1136.91 736.769 1136.12 737.403 1136.12 738.195Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 747.481C1136.12 748.273 1136.92 748.907 1137.9 748.907C1138.88 748.907 1139.67 748.264 1139.67 747.481C1139.67 746.698 1138.87 746.054 1137.9 746.054C1136.91 746.045 1136.12 746.688 1136.12 747.481Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 756.766C1136.12 757.559 1136.92 758.193 1137.9 758.193C1138.88 758.193 1139.67 757.549 1139.67 756.766C1139.67 755.974 1138.87 755.34 1137.9 755.34C1136.91 755.331 1136.12 755.974 1136.12 756.766Z"
            fill="#22223B"
          />
          <path
            d="M1136.12 766.051C1136.12 766.844 1136.92 767.478 1137.9 767.478C1138.88 767.478 1139.67 766.835 1139.67 766.051C1139.67 765.259 1138.87 764.625 1137.9 764.625C1136.91 764.616 1136.12 765.259 1136.12 766.051Z"
            fill="#22223B"
          />
          <path
            d="M1107.81 525.691V553.93"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.82 563.896V577.284"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.82 599.565C1107.93 600.227 1107.82 624.933 1107.82 624.933"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.73 586.196V591.902"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.73 657.684V666.745"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.73 733.105V742.177"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.73 748.134V757.196"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.82 673.766V682.837"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1107.73 689.857V706.405"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <mask
          id="mask5_0_35402"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="961"
          y="597"
          width="132"
          height="240"
        >
          <path
            d="M1092.76 597.169V836H961.562V804.303C967.945 806.373 974.71 809.449 980.79 812.348C991.52 817.504 1003.47 817.84 1004.8 817.868H1004.91C1005.33 817.868 1005.76 817.84 1006.16 817.774C1006.99 817.653 1007.83 817.513 1008.91 817.299L1009.31 817.224C1011.01 816.879 1012.64 816.451 1014.19 815.956L1014.49 815.863C1016.04 815.35 1017.46 814.782 1018.85 814.11L1019.08 813.989C1020.38 813.355 1021.58 812.647 1022.77 811.826C1027.49 808.517 1030.36 804.21 1031.31 799.017C1031.34 798.924 1031.35 798.84 1031.37 798.747L1031.41 798.495C1031.5 797.861 1031.57 797.227 1031.61 796.537C1031.66 795.679 1031.66 794.812 1031.6 793.964V793.955C1031.43 791.176 1030.75 789.219 1030.7 789.06C1019.88 756.906 981.964 748.692 961.562 746.623V597.169H1092.76Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask5_0_35402)">
          <path
            d="M1045.07 704.755V625.809L1070.35 651.904L1085.55 667.585L1053.49 704.755"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1008.33 651.904L993.133 667.585L1033.61 714.506V651.904V625.809L1008.33 651.904Z"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.55 667.584V812.274H993.133V667.584"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1053.49 705.407H1045.07H1033.61V812.274H1051.79"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1033.62 686.09H1033.61"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1033.62 695.749H1033.61"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1033.62 705.407H1033.61"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.53 724.714H993.133"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.53 734.364H993.133"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.54 744.022H993.133"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1009.09 686.09H993.133"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1017.43 695.749H993.145"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1025.76 705.407H993.145"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.05 686.09H1069.59"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.03 695.749H1061.25"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.04 705.407H1052.42"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.55 715.056H993.156"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.54 753.681H993.145"
            stroke="#22223B"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1085.54 763.33H993.145"
            stroke="#FE9264"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_0_35402">
          <rect
            width="1440"
            height="599"
            fill="white"
            transform="translate(-2 304)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowUpIcon = ({ width = "24", height = "24", fill = "none" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4806 15.1045C17.3462 14.9701 17.2614 14.7863 17.2614 14.5742L17.2614 6.73942L9.42661 6.73942C9.01649 6.73942 8.67708 6.40001 8.67708 5.98989C8.67708 5.57977 9.01649 5.24035 9.42661 5.24035L18.0109 5.24035C18.421 5.24035 18.7604 5.57977 18.7604 5.98989L18.7604 14.5742C18.7604 14.9843 18.421 15.3237 18.0109 15.3237C17.8058 15.3308 17.6149 15.2388 17.4806 15.1045Z"
        fill={fill}
      />
      <path
        d="M5.45969 18.5416C5.16977 18.2517 5.16977 17.7709 5.45969 17.481L17.3603 5.58038C17.6502 5.29047 18.131 5.29047 18.421 5.58038C18.7109 5.87029 18.7109 6.35113 18.421 6.64104L6.52035 18.5416C6.23043 18.8316 5.7496 18.8316 5.45969 18.5416Z"
        fill={fill}
      />
    </svg>
  );
};

export const ButtonIcon = ({ width = "48", height = "48" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4806 15.1045C17.3462 14.9701 17.2614 14.7863 17.2614 14.5742L17.2614 6.73942L9.42661 6.73942C9.01649 6.73942 8.67708 6.40001 8.67708 5.98989C8.67708 5.57977 9.01649 5.24035 9.42661 5.24035L18.0109 5.24035C18.421 5.24035 18.7604 5.57977 18.7604 5.98989L18.7604 14.5742C18.7604 14.9843 18.421 15.3237 18.0109 15.3237C17.8058 15.3308 17.6149 15.2388 17.4806 15.1045Z"
        fill="#FEFEFE"
      />
      <path
        d="M5.45969 18.5414C5.16977 18.2515 5.16977 17.7707 5.45969 17.4807L17.3603 5.58013C17.6502 5.29022 18.131 5.29022 18.421 5.58013C18.7109 5.87005 18.7109 6.35088 18.421 6.64079L6.52035 18.5414C6.23043 18.8313 5.7496 18.8313 5.45969 18.5414Z"
        fill="#FEFEFE"
      />
    </svg>
  );
};

export const WriteIcon = ({ width = "45", height = "45" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_0_37645)">
        <path
          d="M6.56249 34.687C6.04501 34.687 5.625 35.107 5.625 35.6245C5.625 36.142 6.04501 36.562 6.56249 36.562H17.1371C17.6545 36.562 18.0745 36.142 18.0745 35.6245C18.0745 35.107 17.6565 34.687 17.1371 34.687H6.56249Z"
          fill="#C27428"
        />
        <path
          d="M26.2492 18.7502C26.2492 18.2328 25.8292 17.8127 25.3117 17.8127H6.56249C6.04501 17.8127 5.625 18.2328 5.625 18.7502C5.625 19.2677 6.04501 19.6877 6.56249 19.6877H25.3117C25.8292 19.6877 26.2492 19.2677 26.2492 18.7502Z"
          fill="#C27428"
        />
        <path
          d="M30.9362 34.3043C30.4188 34.3043 29.9987 34.7243 29.9987 35.2418V41.1165H1.87489V39.2791C1.87489 39.2772 1.87489 39.2772 1.87489 39.2753C1.87489 39.2734 1.87489 39.2735 1.87489 39.2715V11.1177H10.312C10.8295 11.1177 11.2495 10.6977 11.2495 10.1802V1.74306H29.9987V21.0343C29.9987 21.5517 30.4188 21.9718 30.9362 21.9718C31.4537 21.9718 31.8737 21.5517 31.8737 21.0343V0.805655C31.8737 0.288176 31.4537 -0.131836 30.9362 -0.131836H10.312C10.2708 -0.131836 10.2333 -0.113116 10.1921 -0.107491C10.1509 -0.101866 10.1152 -0.0962417 10.0758 -0.0849922C9.91647 -0.0418396 9.76645 0.0256576 9.64832 0.141844L0.273768 9.51658C0.157494 9.6347 0.0899963 9.78472 0.0469317 9.94221C0.0356821 9.98343 0.0282117 10.0191 0.0244326 10.0603C0.0187199 10.1016 0 10.139 0 10.1803V39.2716C0 39.2735 0 39.2735 0 39.2754C0 39.2773 0 39.2772 0 39.2792V42.054C0 42.5715 0.420012 42.9915 0.937491 42.9915H30.9362C31.4537 42.9915 31.8737 42.5715 31.8737 42.054V35.2419C31.8737 34.7243 31.4537 34.3043 30.9362 34.3043ZM9.37464 3.06866V9.24281H3.20049L9.37464 3.06866Z"
          fill="#C27428"
        />
        <path
          d="M20.3581 29.9997C20.3581 29.4823 19.9381 29.0623 19.4206 29.0623H6.56249C6.04501 29.0623 5.625 29.4823 5.625 29.9997C5.625 30.5172 6.04501 30.9372 6.56249 30.9372H19.4207C19.94 30.9372 20.3581 30.5172 20.3581 29.9997Z"
          fill="#C27428"
        />
        <path
          d="M23.4067 24.375C23.4067 23.8575 22.9867 23.4375 22.4693 23.4375H6.56249C6.04501 23.4375 5.625 23.8575 5.625 24.375C5.625 24.8925 6.04501 25.3125 6.56249 25.3125H22.4693C22.9887 25.3125 23.4067 24.8925 23.4067 24.375Z"
          fill="#C27428"
        />
        <path
          d="M44.1566 19.0653L39.9962 14.9086C38.9068 13.8192 37.0038 13.8192 35.9144 14.9086L22.775 28.0499C22.6794 28.1455 22.6119 28.258 22.5651 28.3761C22.5632 28.3799 22.5595 28.3836 22.5576 28.3874L20.2159 34.7339C20.2102 34.747 20.2065 34.7583 20.2028 34.7715L18.5153 39.3444C18.3897 39.6875 18.4741 40.0738 18.7329 40.3306C18.911 40.5106 19.1509 40.6044 19.3966 40.6044C19.5053 40.6044 19.6159 40.5856 19.721 40.5463L24.2939 38.8588C24.3052 38.8551 24.3164 38.8514 24.3295 38.8457L30.678 36.504C30.6818 36.5021 30.6855 36.4984 30.6893 36.4965C30.8074 36.4515 30.9199 36.384 31.0155 36.2866L44.1568 23.1471C45.2816 22.0221 45.2816 20.1902 44.1566 19.0653ZM20.977 38.0826L21.4513 36.802L22.2594 37.6101L20.977 38.0826ZM24.1963 36.8958L22.1657 34.8653L23.81 30.4104L28.6529 35.2534L24.1963 36.8958ZM42.8274 21.8214L30.3498 34.299L24.7625 28.7118L37.2401 16.2342C37.6226 15.8535 38.2882 15.8535 38.6706 16.2342L42.8292 20.3927C43.2229 20.7865 43.2229 21.4277 42.8274 21.8214Z"
          fill="#C27428"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_37645">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const SheveronDown = ({ width = "12.01", height = "6.51" }) => {
  return (
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.148697 6.35421C0.0548287 6.26058 0.00199226 6.1335 0.0018044 6.00092C0.00161653 5.86834 0.0540944 5.74111 0.147698 5.64721L5.6127 0.163215C5.66381 0.111815 5.72458 0.0710258 5.79151 0.0431923C5.85844 0.0153589 5.93021 0.00102944 6.0027 0.00102944C6.07519 0.00102945 6.14696 0.0153589 6.21389 0.0431924C6.28082 0.0710258 6.34159 0.111815 6.3927 0.163215L11.8557 5.64722C11.9034 5.69341 11.9414 5.74863 11.9675 5.80967C11.9936 5.87071 12.0073 5.93634 12.0078 6.00272C12.0083 6.06911 11.9955 6.13493 11.9703 6.19634C11.9451 6.25775 11.9079 6.31352 11.8609 6.3604C11.8139 6.40728 11.758 6.44433 11.6965 6.46938C11.635 6.49443 11.5692 6.50699 11.5028 6.50632C11.4364 6.50565 11.3708 6.49177 11.3098 6.46548C11.2489 6.4392 11.1938 6.40103 11.1477 6.35322L6.0027 1.18821L0.855697 6.35321C0.762066 6.44708 0.634986 6.49992 0.502404 6.50011C0.369823 6.5003 0.242593 6.44782 0.148697 6.35421Z" fill="#22223B" />
    </svg>

  );
};
export const SheveronUp = () => {
  return (
    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8513 0.145784C11.9452 0.239416 11.998 0.366495 11.9982 0.499077C11.9984 0.63166 11.9459 0.758888 11.8523 0.852784L6.3873 6.33678C6.33619 6.38818 6.27542 6.42897 6.20849 6.45681C6.14156 6.48464 6.06979 6.49897 5.9973 6.49897C5.92482 6.49897 5.85304 6.48464 5.78611 6.45681C5.71918 6.42897 5.65841 6.38818 5.6073 6.33678L0.144302 0.852784C0.096617 0.806592 0.0586082 0.751367 0.0324936 0.690329C0.00637901 0.629291 -0.0073183 0.563663 -0.00779937 0.497275C-0.00828044 0.430887 0.00446442 0.365068 0.0296917 0.303658C0.054919 0.242248 0.0921234 0.186477 0.139134 0.139599C0.186145 0.0927208 0.242022 0.0556742 0.303503 0.0306207C0.364984 0.00556721 0.430838 -0.00699115 0.497225 -0.00632228C0.563611 -0.0056534 0.6292 0.00822928 0.690164 0.0345164C0.751127 0.0608036 0.806246 0.0989685 0.852303 0.146784L5.9973 5.31178L11.1443 0.146784C11.2379 0.0529161 11.365 7.84392e-05 11.4976 -0.000109089C11.6302 -0.000296616 11.7574 0.0521815 11.8513 0.145784Z" fill="#22223B" />
    </svg>

  )
}

export const AuthorStartsIcon = ({ width = "120", height = "24" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FF6525" />
      <path d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z" fill="#FF6525" />
      <path d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z" fill="#FF6525" />
      <path d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z" fill="#FF6525" />
      <path d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z" fill="#FF6525" />
    </svg>

  )
}

export const GoogleStarsIcon = ({ width = "121", height = "22" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 121 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5002 15.8309L15.4773 18.1318C16.2056 18.5534 17.0969 17.9301 16.9052 17.1418L15.8511 12.8151L19.3681 9.90011C20.0102 9.36844 19.6652 8.36011 18.8219 8.29594L14.1931 7.92011L12.3819 3.83178C12.0561 3.08928 10.9444 3.08928 10.6186 3.83178L8.80731 7.91094L4.17856 8.28678C3.33522 8.35094 2.99022 9.35928 3.63231 9.89094L7.14939 12.8059L6.09522 17.1326C5.90356 17.9209 6.79481 18.5443 7.52314 18.1226L11.5002 15.8309Z" fill="#FCB002" />
      <path d="M36.0001 15.8309L39.8043 18.1318C40.501 18.5534 41.3535 17.9301 41.1701 17.1418L40.1618 12.8151L43.526 9.90011C44.1401 9.36844 43.8101 8.36011 43.0035 8.29594L38.576 7.92011L36.8435 3.83178C36.5318 3.08928 35.4685 3.08928 35.1568 3.83178L33.4243 7.91094L28.9968 8.28678C28.1901 8.35094 27.8601 9.35928 28.4743 9.89094L31.8385 12.8059L30.8301 17.1326C30.6468 17.9209 31.4993 18.5443 32.196 18.1226L36.0001 15.8309Z" fill="#FCB002" />
      <path d="M60.5002 15.8309L64.4773 18.1318C65.2056 18.5534 66.0969 17.9301 65.9052 17.1418L64.8511 12.8151L68.3681 9.90011C69.0102 9.36844 68.6652 8.36011 67.8219 8.29594L63.1931 7.92011L61.3819 3.83178C61.0561 3.08928 59.9444 3.08928 59.6186 3.83178L57.8073 7.91094L53.1786 8.28678C52.3352 8.35094 51.9902 9.35928 52.6323 9.89094L56.1494 12.8059L55.0952 17.1326C54.9036 17.9209 55.7948 18.5443 56.5231 18.1226L60.5002 15.8309Z" fill="#FCB002" />
      <path d="M85.0001 15.8309L88.8043 18.1318C89.501 18.5534 90.3535 17.9301 90.1701 17.1418L89.1618 12.8151L92.526 9.90011C93.1401 9.36844 92.8101 8.36011 92.0035 8.29594L87.576 7.92011L85.8435 3.83178C85.5318 3.08928 84.4685 3.08928 84.1568 3.83178L82.4243 7.91094L77.9968 8.28678C77.1901 8.35094 76.8601 9.35928 77.4743 9.89094L80.8385 12.8059L79.8301 17.1326C79.6468 17.9209 80.4993 18.5443 81.196 18.1226L85.0001 15.8309Z" fill="#FCB002" />
      <path d="M109.5 15.8309L113.477 18.1318C114.206 18.5534 115.097 17.9301 114.905 17.1418L113.851 12.8151L117.368 9.90011C118.01 9.36844 117.665 8.36011 116.822 8.29594L112.193 7.92011L110.382 3.83178C110.056 3.08928 108.944 3.08928 108.619 3.83178L106.807 7.91094L102.179 8.28678C101.335 8.35094 100.99 9.35928 101.632 9.89094L105.149 12.8059L104.095 17.1326C103.904 17.9209 104.795 18.5443 105.523 18.1226L109.5 15.8309Z" fill="#FCB002" />
    </svg>

  )
}

export const GoogleIcon = ({ width = "106", height = "33" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 106 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_0_35338)">
        <path d="M102.698 20.1678L105.639 22.0278C104.684 23.3615 102.402 25.6499 98.4549 25.6499C93.554 25.6499 89.9043 22.0523 89.9043 17.4757C89.9043 12.6057 93.5928 9.30176 98.0423 9.30176C102.517 9.30176 104.71 12.679 105.419 14.5022L105.806 15.4323L94.2764 19.9598C95.1534 21.5996 96.5206 22.4316 98.4549 22.4316C100.39 22.4316 101.731 21.5261 102.698 20.1678ZM93.6574 17.219L101.357 14.1842C100.931 13.1687 99.6675 12.4468 98.1582 12.4468C96.2368 12.4468 93.5671 14.062 93.6574 17.219Z" fill="#FF302F" />
        <path d="M84.3457 0.968506H88.0598V24.9033H84.3457V0.968506Z" fill="#20B15A" />
        <path d="M78.4905 9.93796H82.0758V24.475C82.0758 30.5076 78.3228 32.9916 73.8861 32.9916C69.7076 32.9916 67.1928 30.3241 66.2512 28.1583L69.5399 26.8611C70.133 28.1948 71.5647 29.7735 73.8861 29.7735C76.7363 29.7735 78.4905 28.097 78.4905 24.9646V23.7899H78.3615C77.5102 24.7687 75.8852 25.6497 73.8217 25.6497C69.514 25.6497 65.5674 22.0888 65.5674 17.5003C65.5674 12.8869 69.514 9.28955 73.8217 9.28955C75.8724 9.28955 77.5102 10.1584 78.3615 11.1128H78.4905V9.93796ZM78.7482 17.5003C78.7482 14.6124 76.7235 12.5076 74.1441 12.5076C71.5388 12.5076 69.3463 14.6124 69.3463 17.5003C69.3463 20.3512 71.5388 22.4192 74.1441 22.4192C76.7237 22.4316 78.7484 20.3512 78.7484 17.5003" fill="#3686F7" />
        <path d="M45.1776 17.4388C45.1776 22.15 41.3086 25.6128 36.5625 25.6128C31.8165 25.6128 27.9473 22.1378 27.9473 17.4388C27.9473 12.7033 31.8165 9.25269 36.5625 9.25269C41.3086 9.25269 45.1776 12.7033 45.1776 17.4388ZM41.4117 17.4388C41.4117 14.5022 39.1675 12.483 36.5625 12.483C33.9574 12.483 31.7132 14.5022 31.7132 17.4388C31.7132 20.3511 33.9574 22.3947 36.5625 22.3947C39.1677 22.3947 41.4117 20.3511 41.4117 17.4388Z" fill="#FF302F" />
        <path d="M63.9941 17.4757C63.9941 22.1869 60.1249 25.6497 55.3789 25.6497C50.6327 25.6497 46.7637 22.1867 46.7637 17.4757C46.7637 12.7402 50.6327 9.30176 55.3789 9.30176C60.1249 9.30176 63.9941 12.7281 63.9941 17.4757ZM60.2151 17.4757C60.2151 14.5391 57.9711 12.5198 55.3658 12.5198C52.7607 12.5198 50.5165 14.5391 50.5165 17.4757C50.5165 20.388 52.7607 22.4316 55.3658 22.4316C57.9839 22.4316 60.2151 20.3758 60.2151 17.4757Z" fill="#FFBA40" />
        <path d="M13.7865 22.0645C8.38255 22.0645 4.15248 17.9285 4.15248 12.8014C4.15248 7.67437 8.38255 3.53837 13.7865 3.53837C16.7013 3.53837 18.8291 4.62737 20.4026 6.02241L22.995 3.56292C20.8026 1.56839 17.8749 0.0507812 13.7865 0.0507812C6.38366 0.0509777 0.154297 5.77785 0.154297 12.8014C0.154297 19.8252 6.38366 25.5519 13.7865 25.5519C17.7847 25.5519 20.8026 24.3038 23.1627 21.9789C25.5873 19.6783 26.3353 16.4479 26.3353 13.8293C26.3353 13.0094 26.2322 12.1651 26.116 11.5411H13.7865V14.9428H22.5694C22.3114 17.0721 21.6021 18.5282 20.5574 19.5192C19.2935 20.7308 17.2946 22.0645 13.7865 22.0645Z" fill="#3686F7" />
      </g>
      <defs>
        <clipPath id="clip0_0_35338">
          <rect width="106" height="33" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const LeasingBuildingIcon = ({width="251",height="528"}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 251 528" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_0_1" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="6" width="251" height="563">
        <path d="M250.159 568.571H0.816406V6.56494H250.159C250.159 213.344 250.159 430.811 250.159 568.571Z" fill="white" />
      </mask>
      <g mask="url(#mask0_0_1)">
        <path d="M241.325 311.692H91.457V319.687H241.325V311.692Z" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M173.603 133.511H91.4727V311.692H173.603V133.511Z" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M241.328 381.255H53.0156V389.251H241.328V381.255Z" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M241.328 222.845H173.602" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M173.587 133.821H91.457V141.817H173.587V133.821Z" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M162 103L162 133" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M105 103L105 133" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M173.601 389.251H53.0156V546.914H173.601V389.251Z" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M173.599 311.692H91.457V381.248H173.599V311.692Z" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M173.602 377.298V393.097" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M138.465 546.914H241.322V383.393" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M241.328 214.842H173.602V311.692H241.328V214.842Z" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 396.943H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M158.521 405.967H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 414.991H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 424.015H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 433.038H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.637 442.062H145.863" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 451.086H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M160.706 460.109H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.634 469.133H143.094" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M143.095 478.156H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.631 478.156H154.762" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M157.73 487.18H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 496.204H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M158.126 505.228H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 514.251H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M150.209 523.275H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 396.943H104.909H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 405.967H102.131H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M104.909 414.991H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.36 414.991H113.305" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 424.015H119.324H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 433.038H116.778H104.909H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M104.119 442.062H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.357 442.062H117.766" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 451.086H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 460.109H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 469.133H110.489H104.909H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M106.688 478.156H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.36 478.157H115.793" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 487.18H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M104.909 496.204H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 496.204H117.965" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.358 505.228H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M113.303 514.251H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M104.712 523.275H95.6211" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.354 523.275H115.984" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0647 396.943H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0647 405.967H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M60.9777 414.991H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0636 414.991H69.1953" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0647 424.015H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0647 433.038H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0636 442.062H60.9766" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0636 451.085H69.1953" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M72.2538 460.109H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0647 469.133H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M72.6491 478.156H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0709 487.18H66.7266" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0647 496.204H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0647 505.228H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M84.0647 514.251H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M72.6491 523.275H54.3398" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M241.325 319.688H91.457V381.248H241.325V319.688Z" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.353 327.616H109.531" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.356 336.64H107.872H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.356 345.664H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M119.345 354.68H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.354 363.704H110.485H108.66" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M125.356 372.728H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M148.233 327.158H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 327.158H160.113" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 336.182H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M145.268 345.198H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.636 345.198H156.348" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M151.778 354.221H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 354.221H160.113" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M158.521 363.245H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M166.635 372.269H136.91" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.448 150.108H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.448 159.132H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M111.824 168.155H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.445 168.155H124.098" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M120.136 177.172H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.448 186.195H111.824" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M118.95 195.219H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.448 204.243H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.448 213.267H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M107.081 222.291H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.445 222.291H121.121" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.448 231.314H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M110.046 240.338H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.453 240.338H125.094" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.448 249.362H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M116.974 258.385H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.453 258.385H125.094" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.448 267.409H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M117.172 276.433H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.449 285.457H113.012" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M109.534 294.48H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.449 294.48H123.113" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M129.448 303.504H119.543H99.7109" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M192.167 231.314H184.262" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M213.997 231.314H204.395" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M201.862 240.338H184.262" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M213.998 249.362H184.262" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M192.167 258.386H184.262" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M213.997 258.386H205.418" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M213.998 267.409H205.814H184.262" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M213.997 276.433H194.793" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M202.652 285.457H184.262" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M213.998 294.48H184.262" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M194.794 303.504H184.262" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M213.998 303.504H208.395" stroke="#F5EEE8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <rect x="98.5" y="0.5" width="51" height="51" rx="25.5" stroke="#FE9264" />
      <circle cx="123.5" cy="25.5" r="9.5" stroke="#FE9264" stroke-width="1.5" />
      <path d="M130.5 32.5L134 36" stroke="#FE9264" stroke-width="1.5" stroke-linecap="round" />
      <path d="M124.75 52.4215C124.75 52.0073 124.414 51.6715 124 51.6715C123.586 51.6715 123.25 52.0073 123.25 52.4215H124.75ZM120 121.579C120 123.788 121.791 125.579 124 125.579C126.209 125.579 128 123.788 128 121.579C128 119.369 126.209 117.579 124 117.579C121.791 117.579 120 119.369 120 121.579ZM123.25 52.4215V121.579H124.75V52.4215H123.25Z" fill="#FE9264" />
      <rect x="196.5" y="80.5" width="51" height="51" rx="25.5" stroke="#FE9264" />
      <circle cx="221.5" cy="105.5" r="9.5" stroke="#FE9264" stroke-width="1.5" />
      <path d="M228.5 112.5L232 116" stroke="#FE9264" stroke-width="1.5" stroke-linecap="round" />
      <path d="M222.75 132.422C222.75 132.007 222.414 131.672 222 131.672C221.586 131.672 221.25 132.007 221.25 132.422H222.75ZM218 201.579C218 203.788 219.791 205.579 222 205.579C224.209 205.579 226 203.788 226 201.579C226 199.369 224.209 197.579 222 197.579C219.791 197.579 218 199.369 218 201.579ZM221.25 132.422V201.579H222.75V132.422H221.25Z" fill="#FE9264" />
    </svg>
  )
}