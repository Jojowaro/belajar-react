import { useRef } from "react";

const Second = () => {
  const linkRef = useRef(null);

  const scroll = (ref) => (
    window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behaviour: 'smooth'
    })
  )

  return (
    <div>
        <h3>About Page</h3>
        <div onClick={() => scroll(linkRef.current)}>
            <button>Scroll ke bawah</button>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum
            nunc, dapibus eu pellentesque a, viverra in dolor. In metus nisl, ornare
            eu dictum vitae, efficitur sed erat. Phasellus scelerisque tellus
            ultrices maximus viverra. Mauris at mi rhoncus, scelerisque velit nec,
            molestie turpis. Proin ac ullamcorper justo. Cras ligula erat, luctus
            sit amet lobortis et, mollis eu risus. Nam ullamcorper vel justo at
            dictum. Donec fermentum orci sem, nec malesuada tellus gravida ac.
            Vivamus tristique vehicula elementum. Donec ut odio in lacus congue
            suscipit eu vitae felis. Etiam nec porttitor sapien, sed dapibus neque.
            Nam imperdiet, ante ac dapibus pulvinar, nulla dolor porttitor dolor,
            eget aliquam dolor risus vitae urna. Suspendisse aliquam rhoncus
            euismod. Etiam id varius arcu. Aliquam cursus sapien at eros sodales
            bibendum. Maecenas scelerisque, magna non dictum porta, enim magna
            fringilla massa, in venenatis felis lacus non leo. Nullam in vestibulum
            tortor, vitae semper urna. Vivamus sagittis fringilla mattis. Integer in
            tortor quis sem mattis aliquam et vitae erat. Curabitur tempus a ex quis
            sagittis. Cras at lectus rutrum est bibendum elementum. Phasellus nec
            varius lectus. Donec felis ex, congue id molestie venenatis, commodo id
            ipsum. Sed sit amet risus in lorem mollis ullamcorper. Donec eget magna
            quis leo mollis malesuada. Nullam sit amet risus scelerisque sem dapibus
            maximus sed faucibus urna. Cras quam nulla, volutpat sagittis mauris
            vitae, dignissim fringilla tortor. Curabitur arcu odio, vehicula id urna
            at, mollis ornare neque. Nunc vestibulum, mauris sit amet finibus
            imperdiet, enim felis laoreet mauris, eget maximus justo erat nec ipsum.
            Praesent suscipit nunc ac ex lacinia ornare. Etiam commodo augue lacus,
            ut aliquet quam semper eget. Suspendisse diam justo, auctor non pharetra
            vitae, iaculis non leo. Curabitur vel lorem ultrices eros interdum
            tincidunt. Nam ac faucibus magna. Cras sit amet risus risus. Ut eget
            iaculis risus. Aenean id lorem eget ex suscipit pharetra vel feugiat
            justo. Morbi sed volutpat augue. Integer vitae faucibus dolor, non
            sollicitudin nunc. Sed et commodo elit. Integer pretium dui sit amet
            scelerisque aliquet. Sed tempor vestibulum nisl sit amet efficitur.
            Aenean sodales orci in libero efficitur, ut imperdiet nisl rutrum. Etiam
            mollis ultrices lorem, quis commodo tellus suscipit ut. Sed rhoncus
            lobortis ipsum. Cras scelerisque nisi at egestas laoreet. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Praesent ullamcorper est quis tristique congue. Integer sed
            venenatis ante, laoreet pretium nisl. Etiam sagittis pulvinar diam nec
            varius. Aenean efficitur nulla tortor, hendrerit congue metus finibus
            ut.
        </p>
        <br></br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum
            nunc, dapibus eu pellentesque a, viverra in dolor. In metus nisl, ornare
            eu dictum vitae, efficitur sed erat. Phasellus scelerisque tellus
            ultrices maximus viverra. Mauris at mi rhoncus, scelerisque velit nec,
            molestie turpis. Proin ac ullamcorper justo. Cras ligula erat, luctus
            sit amet lobortis et, mollis eu risus. Nam ullamcorper vel justo at
            dictum. Donec fermentum orci sem, nec malesuada tellus gravida ac.
            Vivamus tristique vehicula elementum. Donec ut odio in lacus congue
            suscipit eu vitae felis. Etiam nec porttitor sapien, sed dapibus neque.
            Nam imperdiet, ante ac dapibus pulvinar, nulla dolor porttitor dolor,
            eget aliquam dolor risus vitae urna. Suspendisse aliquam rhoncus
            euismod. Etiam id varius arcu. Aliquam cursus sapien at eros sodales
            bibendum. Maecenas scelerisque, magna non dictum porta, enim magna
            fringilla massa, in venenatis felis lacus non leo. Nullam in vestibulum
            tortor, vitae semper urna. Vivamus sagittis fringilla mattis. Integer in
            tortor quis sem mattis aliquam et vitae erat. Curabitur tempus a ex quis
            sagittis. Cras at lectus rutrum est bibendum elementum. Phasellus nec
            varius lectus. Donec felis ex, congue id molestie venenatis, commodo id
            ipsum. Sed sit amet risus in lorem mollis ullamcorper. Donec eget magna
            quis leo mollis malesuada. Nullam sit amet risus scelerisque sem dapibus
            maximus sed faucibus urna. Cras quam nulla, volutpat sagittis mauris
            vitae, dignissim fringilla tortor. Curabitur arcu odio, vehicula id urna
            at, mollis ornare neque. Nunc vestibulum, mauris sit amet finibus
            imperdiet, enim felis laoreet mauris, eget maximus justo erat nec ipsum.
            Praesent suscipit nunc ac ex lacinia ornare. Etiam commodo augue lacus,
            ut aliquet quam semper eget. Suspendisse diam justo, auctor non pharetra
            vitae, iaculis non leo. Curabitur vel lorem ultrices eros interdum
            tincidunt. Nam ac faucibus magna. Cras sit amet risus risus. Ut eget
            iaculis risus. Aenean id lorem eget ex suscipit pharetra vel feugiat
            justo. Morbi sed volutpat augue. Integer vitae faucibus dolor, non
            sollicitudin nunc. Sed et commodo elit. Integer pretium dui sit amet
            scelerisque aliquet. Sed tempor vestibulum nisl sit amet efficitur.
            Aenean sodales orci in libero efficitur, ut imperdiet nisl rutrum. Etiam
            mollis ultrices lorem, quis commodo tellus suscipit ut. Sed rhoncus
            lobortis ipsum. Cras scelerisque nisi at egestas laoreet. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Praesent ullamcorper est quis tristique congue. Integer sed
            venenatis ante, laoreet pretium nisl. Etiam sagittis pulvinar diam nec
            varius. Aenean efficitur nulla tortor, hendrerit congue metus finibus
            ut.
        </p>

        <a
            href="/about" 
            ref={linkRef}
        >
            Belajar React
        </a>

        <br></br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum
            nunc, dapibus eu pellentesque a, viverra in dolor. In metus nisl, ornare
            eu dictum vitae, efficitur sed erat. Phasellus scelerisque tellus
            ultrices maximus viverra. Mauris at mi rhoncus, scelerisque velit nec,
            molestie turpis. Proin ac ullamcorper justo. Cras ligula erat, luctus
            sit amet lobortis et, mollis eu risus. Nam ullamcorper vel justo at
            dictum. Donec fermentum orci sem, nec malesuada tellus gravida ac.
            Vivamus tristique vehicula elementum. Donec ut odio in lacus congue
            suscipit eu vitae felis. Etiam nec porttitor sapien, sed dapibus neque.
            Nam imperdiet, ante ac dapibus pulvinar, nulla dolor porttitor dolor,
            eget aliquam dolor risus vitae urna. Suspendisse aliquam rhoncus
            euismod. Etiam id varius arcu. Aliquam cursus sapien at eros sodales
            bibendum. Maecenas scelerisque, magna non dictum porta, enim magna
            fringilla massa, in venenatis felis lacus non leo. Nullam in vestibulum
            tortor, vitae semper urna. Vivamus sagittis fringilla mattis. Integer in
            tortor quis sem mattis aliquam et vitae erat. Curabitur tempus a ex quis
            sagittis. Cras at lectus rutrum est bibendum elementum. Phasellus nec
            varius lectus. Donec felis ex, congue id molestie venenatis, commodo id
            ipsum. Sed sit amet risus in lorem mollis ullamcorper. Donec eget magna
            quis leo mollis malesuada. Nullam sit amet risus scelerisque sem dapibus
            maximus sed faucibus urna. Cras quam nulla, volutpat sagittis mauris
            vitae, dignissim fringilla tortor. Curabitur arcu odio, vehicula id urna
            at, mollis ornare neque. Nunc vestibulum, mauris sit amet finibus
            imperdiet, enim felis laoreet mauris, eget maximus justo erat nec ipsum.
            Praesent suscipit nunc ac ex lacinia ornare. Etiam commodo augue lacus,
            ut aliquet quam semper eget. Suspendisse diam justo, auctor non pharetra
            vitae, iaculis non leo. Curabitur vel lorem ultrices eros interdum
            tincidunt. Nam ac faucibus magna. Cras sit amet risus risus. Ut eget
            iaculis risus. Aenean id lorem eget ex suscipit pharetra vel feugiat
            justo. Morbi sed volutpat augue. Integer vitae faucibus dolor, non
            sollicitudin nunc. Sed et commodo elit. Integer pretium dui sit amet
            scelerisque aliquet. Sed tempor vestibulum nisl sit amet efficitur.
            Aenean sodales orci in libero efficitur, ut imperdiet nisl rutrum. Etiam
            mollis ultrices lorem, quis commodo tellus suscipit ut. Sed rhoncus
            lobortis ipsum. Cras scelerisque nisi at egestas laoreet. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Praesent ullamcorper est quis tristique congue. Integer sed
            venenatis ante, laoreet pretium nisl. Etiam sagittis pulvinar diam nec
            varius. Aenean efficitur nulla tortor, hendrerit congue metus finibus
            ut.
        </p>
    </div>
  );
};

export default Second;
