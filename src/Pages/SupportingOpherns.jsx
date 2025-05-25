import { FaHeart, FaGraduationCap, FaSeedling, FaUtensils, FaHandsHelping } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import styles from './SupportingOrphans.module.css';

export default function SupportingOrphans() {
  // Program data
  const programs = [
    {
      icon: <FaUtensils className={styles.programIcon} />,
      title: "Daily Nutrition Programs",
      description: "We provide three nutritious meals daily to ensure every child in our care grows up healthy and strong. Our farm-fresh ingredients come directly from AgroConnect partner farms."
    },
    {
      icon: <FaGraduationCap className={styles.programIcon} />,
      title: "Agricultural Education",
      description: "Children learn sustainable farming techniques through our hands-on programs. We believe education is the seed that grows into a lifetime of opportunity."
    },
    {
      icon: <FaSeedling className={styles.programIcon} />,
      title: "School Garden Projects",
      description: "Each child tends their own garden plot, learning responsibility while growing fresh produce. These gardens provide 40% of our orphanage's food needs."
    },
    {
      icon: <FaHandsHelping className={styles.programIcon} />,
      title: "Vocational Training",
      description: "Teens acquire practical skills in organic farming, beekeeping, and food preservation - empowering them for future employment in agriculture."
    },
    {
      icon: <FaHeart className={styles.programIcon} />,
      title: "Emotional Support",
      description: "Beyond physical needs, we nurture each child's emotional wellbeing through counseling and mentorship programs with our caring staff."
    }
  ];

  // Children's stories with working image URLs
  const childrenStories = [
    {
      id: 1,
      name: "James & Friends",
      age: "Ages 8-12",
      image: "https://media.istockphoto.com/id/827036636/photo/new-water-for-orphanage-in-africa.jpg?s=612x612&w=0&k=20&c=RxWw4ipAt8acxw9Zbhzq_FryyDXPK4lNGopmciho7aQ=",
      story: "These bright young boys came to us after losing their parents to illness. Through our agricultural education program, they've discovered a passion for growing vegetables and now maintain their own garden plot together.",
      progress: "Excelling in both academics and farming skills",
      needs: "School supplies and gardening tools"
    },
    {
      id: 2,
      name: "Happy Home Group",
      age: "Ages 5-10",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      story: "This joyful group represents the heart of our orphanage. Many were street children before finding refuge with us. They now participate in our 'Seed to Table' program, learning how food grows from planting to harvest.",
      progress: "Developing teamwork and agricultural knowledge",
      needs: "Nutritional supplements and educational materials"
    },
    {
      id: 3,
      name: "David",
      age: "Age 7",
      image: "https://media.istockphoto.com/id/1978685940/photo/african-child-hanging-in-front-of-the-house-waiting-for-her-mother.jpg?s=612x612&w=0&k=20&c=5rAlmOUJKw80CM-rul_cqTR7zzVbJuzxr5HPgKS92L4=",
      story: "David came to us malnourished and withdrawn. After months in our care and participating in garden therapy, he's transformed into a vibrant boy who loves tending to the tomato plants and sharing his harvest with others.",
      progress: "Gained 8kg and improved social skills",
      needs: "Continued medical check-ups and mentoring"
    },
    {
      id: 4,
      name: "Sunshine Sisters",
      age: "Ages 6-14",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAzQMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xAA/EAACAQMCBAQDBgQFAgcBAAABAgMABBEFIQYSMUETIlFhFHGBBzKRobHBFSNCUmKC0eHwM7IkJlNykqLxQ//EABsBAAIDAQEBAAAAAAAAAAAAAAABAgMEBQYH/8QANREAAgIBAwIEAwcEAQUAAAAAAAECAxEEITEFEhMiQVEyYXEUgZGhscHwIzNC4dEGFSQ08f/aAAwDAQACEQMRAD8A2/xE/uH40spgfK6McKyk+xpiyj3NAziSaKP78ij5mmk2RckhX4t1SJ9Mlht3DOR2NQtsjVjJmvrlfVJRM6hvQJRzYx1qcZp7o4M9NOGzQ26FfxNjDA/I1cnkzbwe4V1fVra1gWSZhyD7xDDI+led69TK9RjDk9f0CHj5UXv6fMD2vHOlQwstrI9z5uqLt+Jq7otNunpcbV6kuoVyss8j45O9P4umurhykXKEAYKDksK6V2rrpSdnDMNWitjNSUsk2t8R3MUSnPhqSBv3qvT9Qqtn2wRo1dNkIZXJHomr2jhneUEg7nNap3qOEcWFE5tzkM9nrVjIPLPGf8wqT3NFOrjHZl0albEbSqfrUGkuTZHVwlwUL7W4Yo2KuDgZOTsB61Hxq4vBCbvsXlQiXXGVleatDZNMfh5H5PHT7oJ6de3vViszwZ106c5Zsl+A86Na2tsuQwDdyTUpPbY21Uxr4DiOrDysD8jVWDSmjukSPMigAFxVxLacPWRmmIkncYhhDbuff0HvTSyJsXOFvtGtdWjFvqKLbXucKFPkl+XofauX1SdtUO+KzH8yypKWw0R63asCS5GPauPp+sJvDiXvTv0OrfX9PnfkE6qfRtq6sNfHOJrBU6mix/FbEHHxCfjW6u1S4K2sEialZuMrcIR86tdkFyxLLK9qEmTDKPrXjunWK19re5rtjgr3fD9tcEvEWgk/uiOK9HCOpr+CWfqYp1Vz5Qv6loHEESt8DqRlQf0uxU1b9ush/dh96M0tE/8ACQlatFr9sxFzbz/+4bipw6hRPiRV9mtjyL8uqalGjJzuObrzL0pyVVklIuhOyCwUEupPGTxHPLzDm33xnepLCI7ye4yQ/wDh1xE7L782fzqzOC9aSuTz2ZYN1O+iOEeTyk+dtzis8peJLtjwem0eneg009RYsSxhL6g1Lu0tpgYZcRv67VpPPsZNE1eO0mFwRzDkKkDuP/0Vg6jpPtVPYuconCzsfcMNlqllrv8AInUK56K/WvNajRajRPviy6vUV3rDIbrgd5HMtjLyg9iNq06XrVixGayUXaGD+HYrPwxxPZjMNuk6esbb/ga7VfU6pr1RzZ6CSA13q+p6dctDcqYZl6odj9RWuE43LK4I16acZbbAi/1e5uYzHc3EjRE55Adj8/WrFXCLykb4JxWMg9p42O+/zG1TJDpwddX+tytapfOskCgkE7lemfeset1a00VKSbRV4E5y8rNS0XS/hAskszvJ6k1x/wDuFljznCNKojD5sOo/MOXNdLS6uNvlzuKUcCN9oMw0a1F2mpTCSRsJbc5Jb3HsK6KlLOGYp6dt5jIyHUb+a8nM1zI0jsMZJz9PlViwuC9LBR8THzB29qQ90FbHXb5P5fxciF/KW5utYbNBQ33dqG5W8QYx2/CnEU8SukMhiYBlfxMjFSdOFlLJRKNsZOEnhoPaXwXdpIHv/Fb1BJrm6q3WRjiuvCL69PBvMpZGeKxS0jWOG2YgdeUVxvs2ttee1mxSqgsJhSzb0Nc3Sz7XlFtqCkTZAFe00OpdiUWYpIkIzXQlHuWCBQvYFZSGQEV5fqWmmsuKNNUsi1fadauxDQKfmorzjuureE2a1CLBs2k6bAPElhjUD/BWrTW6rUT8OEmPwIvhAHVrHS5ouW3nuIZebrInkYHtgHavWyvl2Y7W8Jb53/nsb9DimeZJY+WzE/WuG9QtUW6UxXNsFOZLVi3h4xnOQPX9a3aPtsi3B5f0x8/Xn7jH1jVOyyKw1H5/n7i/NDzoZYyCvfBrQchnel37xv4cjHY4+lAg7C5SRXjJVhuGBquUVJdr4OfNOuexoXCHFrJPDa36lgx5RIN8fMVybOlrv7q/wNVWt27ZkP2h8d39ne3GjaYjWZjwr3B++2QD5PQb9f0roV6SC5Ro7jMPEeVnLFnkPmZmOST7k961JY2REqt4j7LkjPUUsoaTZWLsDuTmnkRf0XWrnSNTgvLZuWSE5APRh3B+dVX0wvrdc+GOLcXlH6H0HWINZ0y3vrRsxyrkg9UPdT7g18+1Kt09zqnyvz+Zs2ayQcVcU2nDWnia4/mXEm0MCndz6n0A7mu102qd3BTNpGJanqt9xDqctzdTF5n336IvZVHYf7nvk+rhFQRRy9irc2MsalgQWPvk1HxUWqmWAPIW5nUkiRO3rU08lTWHg48RuZBznDEZNNvYlCKlNKXDZougce3nCury2twJLvS5MN4HNl4yepQn/tzj5b1Vpn3V7nS6zWoauWFzg2rSdVsdYsI73TZ1nt5Bsw6j2I7H2NXHJeC4FBAOBRuLkA2klfLq5YZ2LI7BiA9K9d02eZRME0WCcCvRYKGJ2pcf6HbaudMku18ZX5G2OA3pn1pSri9mJSYVKx3Cq6EEMOtZbNBTN7osjdJA+WC1uJ2jkdeYf0k1QtLTS8JYNVVk2sg3WNPtY4yAVzjoTvSlCK4NcLZP4hLubyXSZC9v5kOQ8JPlceh+lRUMy7vX32LJzXa1JZQF4i0y3e2GuaL5rKcHxkRWPhNtkknvkmuhVa7I+dYktnwvwSZybq/Dls/K+P8AfzEoODdMw2Bq0qGLT5udVXuBUWUXw7lkPaNIBqdt7Sr+tEVuYPUfPtP4Y/i+irq1lHm9s4/OFG8kXU/Mjcj61ZJbnSg/KZVo+nvqE6W6boq+NM6+nYVTbPtRoqh3ywxvh0BVj8kAA+XWuc7Zt5OrGmtLAu8R6IiQMypyOOgFX1XPhme6hYyhNlbCgd+tbTnDt9mnFP8ABNS+Eu5T8BdYDZ//AJSdm+vQ/Q9q4vWun/aafEgvPH816/8AKLa59rx6D59oPBMnEKDUtMmb46NAvgu/klUdh6Hf5Hv61zOjdQ8CHZZ8P5/z9CVkM8Gd8OWDpI63SNFcmUxMkmzJjr1r0tk+5LtezJ6eCzljlqHDEMFv4jPgHo3MKqccM0qeeTN+IrUQTGRCDjY1fVJ8MzaiC+JAfAMijr5lz7HO9Xvgop3sj9V+oa1mKWfUbaOGJnllXlVUBJY52AAqjRrMWjt/9Q7XxfujZ/s14MuOGLKa81Kd/i7lBz26P5Ix13HQt79q1cvCPOyWFkvap9oWh6Vc/D3VwwkHUKhbHzxVrpXrIqVk/wDFZI9H1BLy2SeNshgK+T30yoscZHofiWRltJQQtdzpd6U45MNseSpe8R6ZbtJE9wviLtjNe1i1s8mJ5MJ4h0oXOr3V2rqFlmLg/M1VJ+YtjjA867xhHoWhW8dowluCoRQT+ZNXNlaJ+FnvdX4etdVvJmWSWV5DyDYKHYAfXFYtQ45eUb9MpdqwWeWW/trqa0KBySE515gPnWavtxk12RkmkKWs2/gKVk3kPp60Qe+xKa2KCiHQtGllZneC6bwprdxkEHYsB6jc/Sp4dlia2a4exXJRrqanun8zP+RvHYqvkJ2rorPqcl8hexJVl3INAY9wxC0wcSQk5XcEDoasqg5SMttSXAVXjXiZImiN2scMY8x8PLEfWtUrao8rJZCqWMk32dSqNP1u4cgStMilwpOM5JGB8/SuTqG2tjfpks5Y5WOrRSWTeEoaOJcl8Hceu9YpTcH24N6gpebPIva68M4ZOYeKw5ghzn/nWo4a8xJST8pldxCzSMqqSwkKgDuc11YvZHHmsSaG/hfhFJ7r/wAwO1uijPgBgGb2J7fSuX1TW3aaCVMd36/6LaalPdmuHWLHTdHYo+IraHCjJOAo2Hv0FeRqp1E5Ya3k/wCMvmoozS0ur+/im1G5lwZ8vISoZQObZem/lA6V7SuuumKgvQVSl2rHqXI7gSyW8Ei8wAyA2+fp8qUMNmualFC5xT8ROjNdRRxhGwhQAZXtmrq2lPZma1SdTyhQRuSdm7f6Vrxkwxl2yUvY2r7NZNGtYptW1V7eKSJFEU8zABA2cgZ77Cq6K3FNI7XWrlbGqxcYf7DrNxfoslvIbS9S4wD/ANMEj9Ksc66355JHAlmS2RkXEUVtql+Zo0xgYJ9aHNTeURrshFYyPei266fp8MCD7qjc18z1drutc2ehisLAak1OOysmmnPlAq7QKcroxiZ7opJsyvWb57q+muIwwSRsgV9BhHEUmcxvcGss8j5ckLU8AV9Qt1mtyDuV6ZNADf8AZZqjyaRcaVNIB8K5dM9o3O+P8xP/AMqpsrTeWatNPPlD0F61pJdJbqggxvIOrfjWayKisRZva3XduJ/Ed0wm8QtlsHHzqFS9x2ySE/VNTk1RieURxRbLEvQHl3P1rdVX2o5d10rHvwFuHtGsdQsXnuHdpIjysnNgD8KunF9ndEormvE7ZkN68MDmO0iSPBxsMn8ajHzYLfKpMP8AB5WafwrtDjrk1tsrca/KZpTTmUftDMdtfJbW4whiDNy9ycjc1jUWuSxWZWxc+yyeE2Wo2sjqHMqPj7xIwR+9Y9Zskzfot20OV1CkdrIUBwRvgDB3746VilFvfJ0Iyingp6m9rHpwlZlDhNwcHH1pbtpZBYjvgyaVl+IZmMThyJCAeoPbauxBYijh2PMmMWl3U+sQ6ZzyNzwkxS4JBIXpn12xWbV57Hnc06aHesLkfdRtY5tHlhBAYxnA9fnXn9N3xvTfGQta7WgDpcV49ha2qgDxFVVUYUBiudye3UCvQSjmTJ6a1SrXyLWrWd/pt1DcXFpLhSFB5kO5HoD0pdmC/vjJcirxjePciVmRUAwuB+dFS85G+X9MT3Al5OTrKMAYyc/8xW6JzGbVq3Dav9ldh8HAvxSpEzlTzc4zvv3qTeGxuybio52B/D1j/D9PWO4TDt2NcbU1eJZ3MnCWFg7+GhlkfCcpU77VKFzgsFUtMm8hPTtUjuYk5WB8o715DVaSVVjWDr1XRkR8VTE6R4an75A+lbug1Z1GfYr1TxDAp8uY0r2hzDu6TCKB0xQAIAMrMo+VIZDo+p3HDmtfFQAMwBUo42dT1B/ClJdywOMu15NI8K+12yjulAhMm4i5ckD1rBhZ3Z0YW5jng7i4LTm5tSZpnzug2BHqfQVbCqUvkv5+BXPUqLSSy3/PvE7jLhy2t1udUtpY44ZXRCuVUO+CPIOpwO/tWiFibxEz2Uygsy5FzQ7w2GpK7nEE38uUdsnv9DWitpPD4Zlsi2srlBjVbGG21OKQfcZtxmtE6VHElwU1WueYvkZoI4GkhWEqG271p/xMzz3YF/7Q7fwNRiaUMxa3XlwwHQnfHsawWyUnlG2mt1rDFnR7q40XWraeNMFuVZA4wGjJxn39Qfas1tanDtZqpt8OWUaxI7x2/II0QEHIkAJU/Uf7Vz4XYjwdaCi3kVeI47r+DSlABCoILrjLE9eUfv0qVazJPHJVbPytCJEgBaIuQoXCjAIP/MV0tjkhXhe/No7EhXVTkErv8gfzxUJxUlg0aax1zb9zTdC1bS9YgNrOVSVwVZScH6Uo0wS4KbMuTL+pabbabpzSJMI7e3UcztIOYIO5z6UrY5jlFulkqZ5Wwpazd2yyrPDLPcygZUcn4dKzb+p0J2ylHGcitqtpI1j8TOTzu3KifrV1a32MdrxHMjvh7TZ2u4br4YzxoQxiUgMSNwST2yfritKlhmOUknhmsW/FFtbaXFYX0fwy4OVkUDvnAxt+FOSyKLTL1stlfRCWDkdB0ZdxUPDiTRw+nxFi3IN/So+FH2J9zMy0e4WwuWgmlGIzgEHrisc9PCc25EO2Ud0FdU1SO6t4yDhAaWk0saZycSU7ZTWGCoLuKWTwwcAHY1vIF67A+HLD0oAXI7gxSPgZ3oGWbb4Se/Wa6wFA2z0qm9TcfISWF8Rs2gSyLpMHh25PP54kzy4Xbr6VTQpQj5luWuMX67AfiLUXiu49OXlJdgrJF0UH/md6u7XJeYrndGuL8HlAHVbHQ721fN608vJgI7kgfIDG9XpRaz6mC6y3y9zx92V+JlepWs1jOY3VxG2684wce/8ArQaK5xmtnkZrRn1qK2mbJ8JBGzepHepztfZ2k6IRjcps5uGu7K6VlYgKcjNEL5KOC3V01ysUkd61dy6/8OsseGUcgZDuw9KrTFOKSymGtY4bs7i3iYNcuLR1ibCqqqo5Duc9wxI+XzrN4rUVL3b+7Da/Yv8ACynjlYGeO7d7XlKl16B5F6Db1rNZOMK+x8P8dzTVV3yTRXm0q15QNQldIMA8hO5Bxjr06dxv71Y5WTlvtn6Z+5en1eBS7IrffHz/AF/4QvWUXD2pme2e5Wy06IloowhBdv72zvgDYD5k9a1wWG3Ll/sci+bk1GO2P59wv3a6Ysc0FhI86rJlJTEELAev4k/UVaKLtzutv5/P3KVvdNazKwPNjdTikWvJbvtSvdRYLLPJ4LDlKZ2x6EUMmFtF0+RrUSLPyLgM3N0XOcD8BWe9ZQ9FdKVs0uEP2j6Zaafpv8R1MRsUQvzMowi+gz61KmHass53UdS9Rcq6+F+pnFzcJcSzPaKYYJmJVAeiZ2FXGuMcRSYPuJpIR4APMGP3W3BoG4JvJLZ8W6lpVj8JZMix83Vxkr7U8kh34I4sF/p0n8RlT4iN8HtkHpQMWdB0y3u9BN05LSjJLHrVc4Eot4Aktw5HhEnkU7URh2lZ4mVIIYj5VMbTXIdjvUltBGSebG5oEDby2aFQ6DIP51QrU5YOldpJV0xsXqEuD9MGq6vaq6eUyLzA9wD+9Wye2xzJyzJR9/8A6/yNS4h1f+GaVPcNGgt4CVCBwTcPy4VNu2evsKhCLSwyd8/N2xfP5GZ6TJPNYNf3shlnnczO5OOZum3ptVuBJYWCqjEHktmdck4xJ1PcnagGk9mBLiR7i5kRncEgxuST0I3FAlGK4IeHdTnsRNbL/dk59tqTJJ4Lt7qM0+PEYcx6L2A9aSQ3LJNoszSySkrsiqAQem/70pHO10moxwx40vUDJLHDesQioe4w4G4Ug7H0z29arw0208L2e6/bD/m5q0moVrjD1e3zX+i7q+uC7mtZLSOJIRDlJPiM8wzg7L32PfvTnCyM8Syvwyar7K663OMlLf5pe/3i7quqPHal5lEgGCsZUDD+wHT50oVqKwjjrUW32YUnx9MfT2E2MGRyGB3U4z61edM9skCB3b7mc4/agDiYSNb/ABAXDbtnHQDpQB5pTPOUVmJkkJTfttUc7sssUYUd+dzRNFiVVuLZVDMWQAE9AF2/eiUdkjmRtdWlcly/1ZS4616eeNNIjlBjBxKVGBnH3fp+/tTSI6Ghxj3y+4V4H5Z3UfdCr+lM6JHdxu90qrn7jr/20AD7cRsZEnGVx0HagDpLWWMlrOc8rdcVXKxReDbRobb490OA9pOowwcPtawT+FdKebD/ANVWPczQSkgIZmkYu5GT1xQVskWQH6UkSm03sNHDsFrcWcrPjnTcj1qFkmiVcEzy4NtKDyIVYdM96pVXc+42z1s1V4b4GjgKyxcNchAzxgiPcDDkbfkSavW552u3xtRKfpHgE/aXqS3EGIHJitD5QNg5ORzH61M2wXMnywTq+dP0i2gjHVVRvYKN6Cwo6XI58R0KqcYyRkgeg7UDK2vQC0nZuXInXnUk7jYA0ABIvJJHOmXceVgds9qBE2oSDxebI6AD6UAFeGlJlmQdWjDY+RqMzndR/tp/MbbWyDmIlQxUsx5j94cp8vtnpVVqXZh+6/Uq6T3fbIY9y3e2vizRTpZLaJ4QUQRjyoRnYHv1q1y7tx9WaWpcVLuS9ff+bCdrFwZ75lUjw4sqMdz3NNGnRU+HXl8sonPRdifypmw+uAEtyBsAMKPnQB1fAR2iwr1YhfoOtAHHDkJbUgwG0QeQHtk7D9T+FRlxgy6x/wBPt92h21XVodKjkWKFRdeGIlcYznHf8alPlIx4d9ih6ITCS8ju5JYLgb9SdzQdVYSwjnOJrn/Cq/oKBltz/NuWPVBkH023/SgANb+VYyw++pGaAC+kQOLXmeJgWYncYrHdCUpbI9R0rVaerTpTkkyo1pHJ/wBMlCew3FbDyzRTuLe5i5mABUb8wPQUhpN8FJr8BMq/M/QYXAFMQ16Y1tBYiXnZbojcZ2NUzy3gvrjtkvaAzalqM6BQfBj5m9iSAKnjCOb1GyUKZNcsdVA0nQSQvhy3LHlLL23Bwexxnp604epR06H9FN+rb/DYQ9fk+ItXZv8ApvdRJ/lDDP71M6YR15BPpgPcrsfTakAvaY+DD6vlTQMk4jJf4EnvC2/uCKBACJvDlZNh2yfnQB4suZ+VwDgH9KADfDtwLXVLdsjlc+ExI7Nt+uKMGfVQ8SqSRqlvp5TTBcSx5XdThfMMHt9RVGoxGGZcZMXS4d2ojng44kvW07Qb25tiPCD+DErr5kY43z675q2EozinDgJ6fu1Ha1sjKwAFGBj2qZ1TyQNgsozyjfftTUWxZI5nMoSMJu0g7/WojPpG8W5kfOVhUqPn3pgT8JN/5h0yP+mVyrD1ABb9qT4Kropwy/Q91m/a91OYiQuiuQud8+/5Ul8yGmr7IZ9WRrtt/cwNM0EUhxe3i/4B+lMCe4fDTns0FAFKVB4VsfY0gLkWsIIIxLMkbhcEuMlqTyWwshBcZ+p48U0GPEXGehFPBUctOfKB675pYJwliSZ5LYWt2f5sS839yDBoIENxBJY22InLrnHMR92k1uTTzHA1fZSRby3Et4CVnk8ORl3OCMA/jUvQ5PUbElCL9WM/HjwxSwJbOnhKpVmQ5wwwPMOxqEVibX0/c6NcVCqMF6fz9hMu4TLYou28gzg565H71YSCmory6cR/aNqAFey8lzbr/jz9KQy/rsebGyf+2Vk+hB/2piFmZCZy56Nn8aQFOUlLlSOmO9SSyJsuxSc0Ywd8Y/M0hmwWOs3F/wAG6d4Ug8dz4ckjf0sDykkfUGq7o5rawYKH4WugvTP5ArjeeaDSE065lE1x4yyPLGfIx5cH032Har59mcQWF7Dq7vtMk3nbkR0II9qgbi8jeFp5J3M74+gH+9aasKOWUy3lsUY/5cb3GM8qlU/c/tWYuPoIyLUocc7IST70AQaZNJbC0uoWCywtzKSM4ypH+tJkLFmDRT08lgGJJOdyaZMKQ+aaP2oAjmGdUuQf6kX96ALESCeQBv6ogD+FAFGQleSNv6BigAe8ayxx8wzgUANbZfZhmmIH3MIU+U79RSGVRqCLKYpG5MbZxtSAsO4miYBgVII9qBtY5NG+xZUGkzxmMGZJSCzDoeZj+mKa4KLq82Qcl8/3LHF7xckFgyk3LRtIOZQCoyfxBP6VFfFL6/siNabkn8v3YjadN4ljEg3MYy2fXIH65qRoDOrOBprsPTFACrCMXsS91AoGFdaHNo4P/pyhvzoELLHxI2OM8rtj36GkBFqVqFggmXHKcjYb4NWQ9iMuCpbthCO4OKi+Ro0HgKWV7PU7d+bwoYHnTPdsYwPc8o/CoSTcWkZbko3V2fNEnG1qtq1p4SyLFMmfP/cowcfQinHOFkscnPVzm16fuKdudiG6D/epF5bmk8SGCGLIYKcH0z1P6VOUtu1EIx9T6bkjhEQGdsAVWTPYQqKTIckjc0ABXLDSCTsS+2PTNAHOmbCQejUAFLM804PZaAPJQDqc7HoFWgCW0kjRxzNjAxQBSvsG6QocqTQBVhXMag7EKKQDQg9akI8lt0nTDDB7EUMBb1mxkt38RhzKTsw/5tSGCzM8bMYnZXZvKR0PrUcEu+T2Zq/2Iai73OqxMSRiIle5Y5HQfL8qSaXJKcfESx6Ib7zho6pfPqM0sh5VEKxxKF2UnOMnJ6nPyquNr3+rH4MYpRb9ELvFHDdhoVtE1n4guJpfOruWGM59AOpp1Wd/Kw/VewTjFLygLWJee2jjGy4FXFQv2p8S/JUZwcDHtQSUW+EME+n3V5p7QxxkFm6tsKUpJI0V6S6b2QFl0SSxj8G4uYGlzklT0qMJdy4FqdOqH292TgLYCyFtPMZCP7RVi2MwLe8htpTHbWaoSfvNvmkxD/8AZeBeWmsTXTJ0WFCdtyCTj8qDBrZJOJ3x9ctc6RpLtIJJFdwdwcZRTg471TppWTqUrFjPH0OhdCEdTJR9v1ESIjnlAPerwLcf8tDI33mH4egoA8iHiOZH/wAtAHOoScsJRer+X8aAKOpr4WnwqNt+n5UgKumth5x75oALaUrSzlYxlmkCgepNJvCyOMXJqK9Qvd6TDFO6S3qR3DYJVx+9Vqed0dR9PrXllYlL2KM+k3a+ZI1kT+6NhUlJFE+naiO6WV8sFGWJ49pEZT7jFSMkq5w+JYIT12GaCAwg1IRKpoA6Kq6lXUEHsaAFvWeHSymWxznOTFnr8qWAGf7GVdtT1EMhDRiLmB2IPn7+v+tVOWLY54L6niMvobOjhkLPKAwAL8xxv3wen/Pes0pwztJD7ZP0Efj28hubm3WJuUqPEcMc4J7fkat02/dLDSz6/qRtysJixPcabBGWuYHmfqPStD34NNcqqUvEhlsEvxHIpI07T4YR2YrkmkoInLqU8YhFJHKTaxqA57q7kSL0XyipdqMs9VdP4pHE+nhcAsSW6ZOSaZRkp3VikBAA3PpQIpXUMbR8xJ5hSGPn2VtKui3SwRq8j3jHLDAAEab/AK00cbqLfixS9ihxdLbx6XY21uW51nleTP8AdyqDj26VXTLNcflle3DOvP8AvZxzFP6ixFgHmI67mrCRKzGQ8ufLQBMpC9OnpQIrSZe5PN90MCKQynrMnMsa+/SgCpZnE0vuBQAW0l3UySJnKuCMdRigcZOMsrlHdzLJPK0srF3Y9WO9RSSQ5TlOXdJ5Z5HcTRHMUrKfZqMInC6yHwyaLS61dgcs/hzr6OtLsRsh1K5bTxJfMn+K0WWNGuIOSXHmCg4zVb7kb4W9OtipWLDJjhZXjB5grYDDoavi8o4l9arslGLykSLtTKSUNQBT1S/SztywZfEIwoJxQwDP2MRTTzavcuOYSsitIpB3GTj8KzWLM1lEu5xScdt0NMl5NcfEyxzNygyLHDEpOy4x9Sc/jVqgo7IffJ7tiPI7NqVxDMrc8SAFT1BGxFTFnG7LvGEX/g7SVIRGkgCg996z0t9zTOz1CKdUZIlGk2drEkrAbDetRxMlSXMzlwOWFNkUdzQB9DA7SGRhlsYAPQUAUL2ylRzLsT70hgi4UtnmG9IBs+yeUR2+pLLIeVJMkA77qBn/AOtHocfqW1sZP2BXF3iieFWzgSScvMPcD9hQljg3ae3v9eEgKWz070zUdRnFAEgegDhyD1pACtSfmmj9QaAI4Npn91oAc+ALdZbqRnUMuDsfWqL5NROp0utSk5NEmuwxpxCbVUURmMMduhook3Hcj1OuELI9qxlFabSo2z4TEVfg5hSk0uYfdIIowGSpJaTI2CDQGwWgHlBqQFkdKAIr67jsrcySY9h3JoAWdS8e45bt/PGw2x/TUWBo/wBkuqGPQr6CG1hDW8ryyStIVMgK/kR+YFUN/wBZL5BPHh/PJLBxZd2Oim0git41TJE4QiTPNzdc46+1XtBkT9Punl1xnlbmabnyT3J3zQgG/jOIS8LwuPvRBWFYoPFjPQ6iHfp5/iUbW4+K0iOWZgAR0reeeOrUK4+7hR0NGQwTSSJGu3WkME6jIfDLGkwALyZNABfgyeO21hATiOUgPj+ojcD9vrQjndSrzWpex9xfcB7lYMKHjkkLAdvNTF0+DTlL6AAUHSJAcCgD0GgCOVwoyegoYAe4YtcqW6nJx6UgJYRmX5qaAH/7Ol5bWaXHfH1rHqXwjvdMhitsh4jmEeuySf1YVf1qzT/CZ+q470ewTgjP5VpRyGTMFZc9KMiwRSxI3L8qjkYPgPkFTAlkmSCEyyHCgUgEzVdQfUZi5P8ALU5VaTAJ6TKrRLDJhkYcpFNAO/2fW7Wem69bczAyjKOqc23L0Pscde1Z3H/yPu/cbeIZf82J9E4ZfX7KdVmaHwlDKwTmUuegI642NWzmo8jis8itqmg6toWqQSXNuWgWUAzxHKDJwN/XenGSeGhYa5HvU0F1w1y/3RftWCTxaeooj309vuhG0SXlsVBzsxHyroHlw1C+QKYHUzgOoJxmgAZqUmUZBQAEA8wPakBNYytBMsqHDI4INBCyCnFxZzql2L7U7m6AIEr82PpimQorddUYsrg4oLj7moA7BzuOlAirMfHk5FPlG5pADrhgb5sbBQFoGSqcMPqKANJ4Ci8PRubsXJFYdR8R6TpscadfUBcRShtblJ6DFadOsQRzOqPOowRpMYVDkgZ7Vcc4sRXaueYkAUCJJLsAjPWkBXg+4KkIAcRXMjTRwlvJnpSYyjBGnxscZQFGdcj5nFRbwhhXWbOHTdU1C1tAVihAKAnJG2aIPKyA88Ft4qXqyAHEbEHuP5Gf1NZ5trVR+jLEk6JfRP8AMdeCgIeHHkT70tw/P9AAP+e9a/XJSxX+0CZ7nXdMt5m5o1RphtvzLgDf08xqVkIrdLfIVt4w2T2Hn0EFt/5X7Vy7v7h6vQ/2ofQQdMP8tx25z+tb0eYn8TCHisqnB7VIid3UjfDwvnzZFAAy6kYvLv0pMCq20ceKYHKEgN86QFdfuk+5pge52FJgfZpiPZSVibHpQBHBsv0pABySbhyevOf1oGWD94f5qANX4OUDh6LFYNR8R6nRbUxFPWRzatOT/fWun4UcTqX/ALMgdJuHc7kbCrTCToTyKPRc0CPI53kXLHoaAP/Z",
      story: "These girls have formed a special bond through our agricultural programs. The older girls mentor the younger ones in caring for our chicken coop and herb garden, creating a beautiful sisterhood.",
      progress: "Learning leadership through farming responsibilities",
      needs: "Hygiene products and chicken feed"
    },
    {
      id: 5,
      name: "Future Farmers",
      age: "Ages 10-16",
      image: "https://images.pexels.com/photos/15835799/pexels-photo-15835799/free-photo-of-men-with-cows-drinking-water-on-pasture.jpeg?auto=compress&cs=tinysrgb&w=400",
      story: "Our teen participants in the vocational agriculture program. They're mastering advanced techniques like composting, irrigation, and organic pest control to prepare for careers in sustainable farming.",
      progress: "80% show exceptional farming aptitude",
      needs: "Vocational training materials and land for practice"
    }
  ];

  // Impact data for charts
  const yearlyImpactData = [
    { year: '2020', childrenFed: 320, graduates: 15, gardens: 5 },
    { year: '2021', childrenFed: 420, graduates: 28, gardens: 8 },
    { year: '2022', childrenFed: 480, graduates: 42, gardens: 10 },
    { year: '2023', childrenFed: 530, graduates: 63, gardens: 12 }
  ];

  const resourceAllocationData = [
    { name: 'Nutrition', value: 35 },
    { name: 'Education', value: 25 },
    { name: 'Vocational', value: 20 },
    { name: 'Facilities', value: 15 },
    { name: 'Counseling', value: 5 }
  ];

  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#6366F1', '#EC4899'];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Button click handlers
  const handleSponsorClick = () => {
    alert('Thank you for your interest in sponsoring a child! Our team will contact you shortly.');
  };

  const handleVolunteerClick = () => {
    alert('We appreciate your willingness to volunteer! Please check your email for next steps.');
  };

  const handleDonateClick = () => {
    alert('Your donation will make a difference! You will be redirected to our donation portal.');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.mainTitle}>
            Nurturing Hope Through Agriculture
          </h2>
          <p className={styles.headerDescription}>
            At AgroConnect, we believe every child deserves love, nourishment, and the tools to build 
            a bright future. Our orphan support programs combine compassionate care with agricultural 
            education to plant seeds of change.
          </p>
        </motion.div>

        {/* Children's Stories Section */}
        <section className={styles.section}>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.sectionTitle}
          >
            <span className={styles.titleUnderline}>
              Meet Our Children
              <span className={styles.underline}></span>
            </span>
          </motion.h3>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.childrenGrid}
          >
            {childrenStories.map((child, index) => (
              <motion.div 
                key={child.id}
                variants={item}
                whileHover={{ y: -5 }}
                className={styles.childCard}
              >
                <div className={styles.childImageContainer}>
                  <img 
                    src={child.image} 
                    alt={`${child.name} - ${child.age}`}
                    className={styles.childImage}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Child+Photo';
                    }}
                  />
                  <div className={styles.childAgeTag}>{child.age}</div>
                </div>
                <div className={styles.childContent}>
                  <h4 className={styles.childName}>{child.name}</h4>
                  <p className={styles.childStory}>{child.story}</p>
                  <div className={styles.childDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Progress:</span>
                      <span className={styles.detailValue}>{child.progress}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Current Needs:</span>
                      <span className={styles.detailValue}>{child.needs}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Impact Visualization Section */}
        <section className={styles.section}>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.sectionTitle}
          >
            <span className={styles.titleUnderline}>
              Our Growing Impact
              <span className={styles.underline}></span>
            </span>
          </motion.h3>
          
          <div className={styles.chartsContainer}>
            {/* Yearly Impact Bar Chart */}
            <motion.div 
              variants={item}
              className={`${styles.chartCard} ${styles.greenBorder}`}
            >
              <h4 className={styles.chartTitle}>
                Year-Over-Year Progress
              </h4>
              <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={yearlyImpactData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis 
                      dataKey="year" 
                      tick={{ fill: '#6B7280' }} 
                      axisLine={{ stroke: '#9CA3AF' }} 
                    />
                    <YAxis 
                      tick={{ fill: '#6B7280' }} 
                      axisLine={{ stroke: '#9CA3AF' }} 
                    />
                    <Tooltip 
                      contentStyle={{
                        background: 'rgba(255, 255, 255, 0.96)',
                        border: '1px solid #E5E7EB',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="childrenFed" 
                      fill="#10B981" 
                      name="Children Fed" 
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="graduates" 
                      fill="#3B82F6" 
                      name="Vocational Graduates" 
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="gardens" 
                      fill="#F59E0B" 
                      name="School Gardens" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Resource Allocation Pie Chart */}
            <motion.div 
              variants={item}
              className={`${styles.chartCard} ${styles.blueBorder}`}
            >
              <h4 className={styles.chartTitle}>
                Resource Allocation
              </h4>
              <div className={styles.chartWrapper}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={resourceAllocationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {resourceAllocationData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={COLORS[index % COLORS.length]} 
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        background: 'rgba(255, 255, 255, 0.96)',
                        border: '1px solid #E5E7EB',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className={styles.legendContainer}>
                {resourceAllocationData.map((entry, index) => (
                  <div key={index} className={styles.legendItem}>
                    <div 
                      className={styles.legendColor}
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className={styles.legendText}>{entry.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section className={styles.section}>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.sectionTitle}
          >
            <span className={styles.titleUnderline}>
              Our Comprehensive Support Programs
              <span className={`${styles.underline} ${styles.blueToGreen}`}></span>
            </span>
          </motion.h3>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={styles.programsGrid}
          >
            {programs.map((program, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className={styles.programCard}
                style={{ borderTopColor: COLORS[index % COLORS.length] }}
              >
                <div className={styles.programIconWrapper}>
                  <div 
                    className={styles.programIconBackground}
                    style={{ 
                      backgroundColor: `${COLORS[index % COLORS.length]}20`,
                      color: COLORS[index % COLORS.length]
                    }}
                  >
                    {program.icon}
                  </div>
                </div>
                <h4 className={styles.programTitle}>
                  {program.title}
                </h4>
                <p className={styles.programDescription}>
                  {program.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Success Metrics */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.metricsSection}
        >
          <h3 className={styles.metricsTitle}>
            Transforming Lives Through Agriculture
          </h3>
          <div className={styles.metricsGrid}>
            {[
              { value: "100%", description: "Of children maintain healthy BMI", color: "green" },
              { value: "83%", description: "Of graduates find agricultural work", color: "blue" },
              { value: "2.5x", description: "More likely to start their own farm", color: "yellow" }
            ].map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <div className={`${styles.metricValue} ${styles[metric.color]}`}>{metric.value}</div>
                <div className={styles.metricDescription}>{metric.description}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.storySection}
        >
          <div className={styles.storyOverlay}></div>
          <div className={styles.storyContent}>
            <div className={styles.storyInner}>
              <div className={styles.storyHeader}>
                <span className={styles.storyLabel}>Success Story</span>
                <h3 className={styles.storyTitle}>Sarah's Journey</h3>
              </div>
              <blockquote className={styles.storyQuote}>
                "When Sarah came to us at age 8, she had never seen where food comes from. Today at 16, 
                she manages our largest school garden and dreams of starting her own organic farm. 
                Agriculture gave her purpose when she needed it most."
              </blockquote>
              <div className={styles.storyAuthor}>
                — Mama Amina, Orphanage Director
              </div>
            </div>
          </div>
          <div 
            className={styles.storyBackground}
            style={{ 
              backgroundImage: "url(https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.ctaSection}
        >
          <h3 className={styles.ctaTitle}>
            Join Us in Cultivating Brighter Futures
          </h3>
          <p className={styles.ctaDescription}>
            Your support helps us feed more children, expand our educational programs, and 
            transform lives through agriculture.
          </p>
          <div className={styles.buttonContainer}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.button} ${styles.primaryButton}`}
              onClick={handleSponsorClick}
            >
              <span className={styles.buttonText}>Sponsor a Child</span>
              <span className={styles.buttonHover}></span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.button} ${styles.secondaryButton}`}
              onClick={handleVolunteerClick}
            >
              <span className={styles.buttonText}>Volunteer</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.button} ${styles.tertiaryButton}`}
              onClick={handleDonateClick}
            >
              <span className={styles.buttonText}>Donate Supplies</span>
              <span className={styles.buttonHover}></span>
            </motion.button>
          </div>
          <p className={styles.ctaFooter}>
            Every contribution makes a difference in a child's life
          </p>
        </motion.section>
      </div>
    </div>
  );
}